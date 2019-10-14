export function createGrid(rows: number, cols: number): [][] {
  const arr = Array(rows)

  for (let i = 0; i < rows; i++) {
    arr[i] = Array(cols).fill('')
  }

  return arr
}
