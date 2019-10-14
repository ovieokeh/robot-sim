type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'

const movements = {
  UP: ([x, y]): [number, number] => [x - 1, y],
  RIGHT: ([x, y]): [number, number] => [x, y + 1],
  DOWN: ([x, y]): [number, number] => [x + 1, y],
  LEFT: ([x, y]): [number, number] => [x, y - 1]
}

export function moveTo(
  direction: Direction,
  currentPos: [number, number],
  upperBound: number,
  lowerBound: number
): [number, number] {
  const transform = movements[direction]
  const newPos = transform(currentPos)

  if (newPos.some(pos => pos > upperBound || pos < lowerBound))
    return currentPos

  return newPos
}
