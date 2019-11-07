import * as React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { moveTo, keyMapper, Direction } from '../helpers'
import useKeydownLister from './useKeydownListener'

const { useState } = React

const upperBound = 4
const lowerBound = 0

const App: React.FC = () => {
  const [currentPos, setCurrentPos] = useState<[number, number]>([0, 0])
  const [currentDirection, setCurrentDirection] = useState<Direction>('RIGHT')

  const moveRobot = (): void => {
    const newPos = moveTo(currentDirection, currentPos, upperBound, lowerBound)
    setCurrentPos(newPos)
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    const newDirection = keyMapper[event.key]
    if (!newDirection) return

    if (newDirection !== currentDirection)
      return setCurrentDirection(newDirection)

    moveRobot()
  }

  useKeydownLister(handleKeyDown, currentDirection, currentPos)

  const handleControlClick = (direction: Direction) => () => {
    direction === currentDirection
      ? moveRobot()
      : setCurrentDirection(direction)
  }

  const handleCellClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLDivElement

    const posX = Number(target.id[0])
    const posY = Number(target.id[1])

    setCurrentPos([posX, posY])
  }

  return (
    <Container>
      <Grid
        rows={5}
        cols={5}
        currentPos={currentPos}
        onCellClick={handleCellClick}
        currentDirection={currentDirection}
      />
      <Controls>
        <Button onClick={handleControlClick('UP')}>↑</Button>
        <div>
          <Button className="alt" onClick={handleControlClick('LEFT')}>
            ←
          </Button>
          <Button className="alt" onClick={handleControlClick('RIGHT')}>
            →
          </Button>
        </div>
        <Button onClick={handleControlClick('DOWN')}>↓</Button>
      </Controls>
      <span>You can also control the plane with your arrow keys</span>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3% 0;
  text-align: center;
`

const Button = styled.button`
  font-size: 1em;
  padding: 1em 2em;
  border-style: none;
  background-color: #333;
  color: #ddd;
  cursor: pointer;
  outline: 0;
  max-width: 200px;
  &:hover {
    background-color: #ddd;
    color: #333;
  }
  &.alt {
    max-width: 200px;
    background-color: #444;
    &:hover {
      background-color: #ddd;
      color: #444;
    }
  }
`

export default App
