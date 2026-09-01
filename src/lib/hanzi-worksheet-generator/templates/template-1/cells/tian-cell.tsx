import { Line, Svg } from '@react-pdf/renderer'

function TianCell() {
  return (
    <Svg
      viewBox="0 0 100 100"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Line
        x1={0}
        y1={50}
        x2={100}
        y2={50}
        stroke="silver"
        strokeWidth={0.5}
        strokeDasharray="2 2"
      />
      <Line
        x1={50}
        y1={0}
        x2={50}
        y2={100}
        stroke="silver"
        strokeWidth={0.5}
        strokeDasharray="2 2"
      />
    </Svg>
  )
}

export { TianCell }
