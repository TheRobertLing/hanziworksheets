import { View } from '@react-pdf/renderer'

import { KouCell } from './kou-cell'
import type { TianCell } from './tian-cell'
import type { MiCell } from './mi-cell'
import type { PracticeCharacter } from '../characters/practice-character'
import type { GuideCharacter } from '../characters/guide-character'

function Cell({
  gridStyle = <KouCell />,
  character,
  size,
}: {
  gridStyle?: ReturnType<typeof KouCell | typeof TianCell | typeof MiCell>
  character?: ReturnType<typeof PracticeCharacter | typeof GuideCharacter>
  size?: number
}) {
  const dimension = size === undefined ? '100%' : `${size}mm`

  return (
    <View
      style={{
        position: 'relative',
        width: dimension,
        height: dimension,
      }}
      wrap={false}
    >
      {gridStyle}
      {character}
    </View>
  )
}

export { Cell }
