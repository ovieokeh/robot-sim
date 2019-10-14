export * from './createGrid'
export * from './genKey'
export * from './isCurrentPos'
export * from './moveTo'

export type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'

export const rotationMapper = {
  UP: 270,
  RIGHT: 0,
  DOWN: 90,
  LEFT: 180
}

export const keyMapper = {
  ArrowUp: 'UP',
  ArrowRight: 'RIGHT',
  ArrowDown: 'DOWN',
  ArrowLeft: 'LEFT'
}
