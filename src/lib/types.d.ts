
export type InputProps = {
  type: string,
  placeholder:string
}

export type ButtonProps = {
  type:ButtonHTMLAttributes<HTMLButtonElement>
  text:string
  clickHandler:(e:ClickEvent)=> void
}

export type ClickEvent = React.MouseEvent<HTMLButtonElement>