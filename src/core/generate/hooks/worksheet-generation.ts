import { useCallback, useMemo } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import { useWorksheetConfig } from '@/core/config'
import { fetchStrokes } from '@/lib/hanzi-stroke-data'
import { generateHanziWorksheet } from '@/lib/hanzi-worksheet-generator'
import { useWorksheetGeneratorStore } from '../stores/worksheet-generator'

function useWorksheetGeneration() {
  const queryClient = useQueryClient()
  const config = useWorksheetConfig()
  const { blob, status, error, begin, succeed, fail } = useWorksheetGeneratorStore(
    useShallow((state) => ({
      blob: state.blob,
      status: state.status,
      error: state.error,
      begin: state.begin,
      succeed: state.succeed,
      fail: state.fail,
    }))
  )
  const canGenerate = config.characters.length > 0

  const generate = useCallback(async () => {
    if (config.characters.length === 0 || !begin()) return

    try {
      const characterData = await Promise.all(
        config.characters.map(async ({ id, character, pinyin }) => ({
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

      const worksheet = await generateHanziWorksheet({
        characters: characterData,
        template: config.template,
        print: config.print,
      })

      succeed(worksheet)
    } catch (cause) {
      fail(cause instanceof Error ? cause.message : 'Unknown error')
    }
  }, [begin, config, fail, queryClient, succeed])

  return useMemo(
    () => ({
      blob,
      status,
      error,
      isGenerating: status === 'loading',
      isGenerationError: status === 'error',
      canGenerate,
      generate,
    }),
    [blob, canGenerate, error, generate, status]
  )
}

export { useWorksheetGeneration }
export type { WorksheetGenerationStatus } from '../stores/worksheet-generator'
