import * as React from 'react'
import styled from 'styled-components'
import * as Helpers from '../helpers'

interface GridProps {
  rows: number
  cols: number
  currentPos: [number, number]
  onCellClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  currentDirection: Helpers.Direction
}

const GridComponent: React.FC<GridProps> = ({
  rows,
  cols,
  currentPos,
  onCellClick,
  currentDirection
}) => {
  const grid = Helpers.createGrid(rows, cols)

  return (
    <Grid data-rows={rows} data-cols={cols}>
      {grid.map((row, x) =>
        row.map((_, y) => (
          <Cell
            key={Helpers.genKey(x, y)}
            id={`${x}${y}`}
            className={Helpers.isCurrentPos(x, y, currentPos) && 'current'}
            data-direction={Helpers.rotationMapper[currentDirection]}
            onClick={onCellClick}
          >
            {Helpers.isCurrentPos(x, y, currentPos) && '\u2708'}
          </Cell>
        ))
      )}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props['data-cols']}, 100px);
  grid-auto-rows: 100px;
`

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  background-color: #333;
  color: #ddd;
  font-size: 2em;
  transform: rotate(${props => `${props['data-direction']}deg`});
  &:hover {
    cursor: pointer;
  }

  &.current {
    background-color: #ddd;
    color: #333;
  }
`

export default GridComponent
