import { type DayProps, type ExerciseList } from "@/lib/types"
import { Fragment } from "react"
import Exercise from "./Exercise"

const mockExercisesList: ExerciseList = [
  {
    name: "some exercise",
    sets: 3,
    repetitions:15
  },
  {
    name: "some exercise",
    sets: 3,
    repetitions:15
  },
  {
    name: "some exercise",
    sets: 3,
    repetitions:15
}
]

const Day:React.FC<DayProps> = ({ exercises, day }) => {
  return (
    <main className="flex flex-col items-center" >
      <h1 className="font-extrabold text-5xl capitalize mt-4 p-10">{ day }</h1>
      {
        mockExercisesList.map((exercise, index) => (
          <Fragment key={index}>
            <Exercise exercise={exercise}/>
          </Fragment>
        ))
      }
    </main>
  )
}

export default Day