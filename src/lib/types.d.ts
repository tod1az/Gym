import { Days } from "./consts"

export type InputProps = {
  type: string,
  placeholder:string | number
}

export type ButtonProps = {
  type:ButtonHTMLAttributes<HTMLButtonElement>
  text:string
  clickHandler:(e:ClickEvent)=> void
}

export type  ExerciseType = {
  name: string,
  sets: number,
  repetitions:number
}

export type ExerciseProps = {
  exercise:ExerciseType
}

export type ExerciseList = ExerciseType[]

export type DayProps = {
  exercises: ExerciseList
  day: (typeof Days)[keyof typeof Days]
}

export type ClickEvent = React.MouseEvent<HTMLButtonElement>