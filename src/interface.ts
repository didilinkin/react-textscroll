export enum Mode {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface TextScrollProp {
  className?: string
  mode: Mode
  text: Array<string>
  speed?: number
}
