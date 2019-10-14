import * as React from 'react'
import styled from 'styled-components'
import Grid from './Grid'
import { moveTo, keyMapper, Direction } from '../helpers'

const { useState, useEffect } = React
const upperBound = 4
const lowerBound = 0

const App: React.FC = () => {
  const [currentPos, setCurrentPos] = useState<[number, number]>([0, 0])
  const [currentDirection, setCurrentDirection] = useState<Direction>('RIGHT')

  const handleKeyDown = (event: KeyboardEvent): void => {
    const newDirection = keyMapper[event.key]
    if (!newDirection) return

    if (newDirection !== currentDirection)
      return setCurrentDirection(newDirection)

    const newPos = moveTo(newDirection, currentPos, upperBound, lowerBound)

    setCurrentDirection(newDirection)
    setCurrentPos(newPos)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentDirection, currentPos])

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
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

export default App
