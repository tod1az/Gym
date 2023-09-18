import { Days } from "./consts"

export type InputProps = {
  type: string,
  placeholder: string | number
  change?: (e:React.ChangeEvent<HTMLInputElement>) => void 
  value?:string| number
}

export type ButtonProps = {
  type:ButtonHTMLAttributes<HTMLButtonElement>
  text:string
  clickHandler:(e:ClickEvent)=> void
}

export type  ExerciseType = {
  name: string
  sets: number
  repetitions: number
  weight:number
}

export type ExerciseProps = {
  exercise:ExerciseType
}

export type ExerciseList = ExerciseType[]

export type EditExerciseProprs = {
  exercise: ExerciseType
  save:(ExerciseType)=>void
}

export type Day = (typeof Days)[keyof typeof Days]

export type DayProps = {
  exercises: ExerciseList
  day: Day
}


export type ClickEvent = React.MouseEvent<HTMLButtonElement>