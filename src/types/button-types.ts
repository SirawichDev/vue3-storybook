export interface ButtonProps {
  title: string
}

export interface ButtonEmit {
  onClick: (e: 'update', value: string) => void
}
