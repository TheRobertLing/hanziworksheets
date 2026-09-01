import { Line, Svg, Text, View } from '@react-pdf/renderer'

function PinyinRow({
  pinyin,
  gridSize,
  rowCount,
}: {
  pinyin: string
  gridSize: number
  rowCount: number
}) {
  const width = gridSize * rowCount
  const height = gridSize / 2

  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: `${width}mm`,
        height: `${height}mm`,
      }}
      wrap={false}
    >
      <Svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Line
          x1={0}
          y1={height / 3}
          x2={width}
          y2={height / 3}
          stroke="silver"
          strokeWidth={0.2}
          strokeDasharray="1 1"
        />
        <Line
          x1={0}
          y1={(height * 2) / 3}
          x2={width}
          y2={(height * 2) / 3}
          stroke="silver"
          strokeWidth={0.2}
          strokeDasharray="1 1"
        />
      </Svg>

      <Text
        style={{
          width: `${gridSize}mm`,
          textAlign: 'center',
          fontSize: `${gridSize * 0.25}mm`,
          position: 'relative',
          top: `-${gridSize * 0.03}mm`,
        }}
      >
        {pinyin}
      </Text>
    </View>
  )
}

export { PinyinRow }
