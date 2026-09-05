import { useCallback, useMemo } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { useWorksheetConfig } from '@/core/config'
import { fetchStrokes } from '@/lib/hanzi-stroke-data'
import { generateHanziWorksheet } from '@/lib/hanzi-worksheet-generator'
import { useGeneratedWorksheet } from './generated-worksheet'
import { useWorksheetGenerationStatus } from './worksheet-generation-status'

function useWorksheetGeneration() {
  const queryClient = useQueryClient()
  const worksheetConfig = useWorksheetConfig()
  const { worksheetBlob } = useGeneratedWorksheet()
  const { status, error, startGeneration, completeGeneration, failGeneration } =
    useWorksheetGenerationStatus()
  const canGenerate = worksheetConfig.characters.length > 0

  const generate = useCallback(async () => {
    if (worksheetConfig.characters.length === 0 || !startGeneration()) return

    try {
      const worksheetCharacters = await Promise.all(
        worksheetConfig.characters.map(async ({ id, character, pinyin }) => ({
          id,
          character,
          pinyin,
          strokes: await queryClient.fetchQuery({
            queryKey: ['character-strokes', character],
            queryFn: () => fetchStrokes(character),
            staleTime: Infinity,
            gcTime: Infinity,
          }),
        }))
      )

      const worksheetBlob = await generateHanziWorksheet({
        characters: worksheetCharacters,
        template: worksheetConfig.template,
        print: worksheetConfig.print,
      })

      completeGeneration(worksheetBlob)
    } catch (cause) {
      failGeneration(cause instanceof Error ? cause.message : 'Unknown error')
    }
  }, [completeGeneration, failGeneration, queryClient, startGeneration, worksheetConfig])

  return useMemo(
    () => ({
      worksheetBlob,
      status,
      error,
      isGenerating: status === 'loading',
      isGenerationError: status === 'error',
      canGenerate,
      generate,
    }),
    [canGenerate, error, generate, status, worksheetBlob]
  )
}

export { useWorksheetGeneration }
export type { WorksheetGenerationStatus } from '../stores/worksheet-generator'
