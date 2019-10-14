export function isCurrentPos(
  x: number,
  y: number,
  currentPos: number[]
): boolean {
  return x === currentPos[0] && y === currentPos[1]
}
