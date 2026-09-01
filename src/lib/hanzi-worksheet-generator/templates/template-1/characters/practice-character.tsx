import { Path, Svg } from '@react-pdf/renderer'

interface PracticeCharacterProps {
  strokes: string[]
}

function PracticeCharacter({ strokes }: PracticeCharacterProps) {
  return (
    <Svg
      viewBox="0 0 1024 1024"
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '80%',
      }}
    >
      {strokes.map((stroke, index) => (
        <Path key={index} d={stroke} fill="black" />
      ))}
    </Svg>
  )
}

export { PracticeCharacter }
