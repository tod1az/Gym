import { type DayProps, type ExerciseList } from "@/lib/types"
import { Fragment } from "react"
import Exercise from "./Exercise"

const mockExercisesList: ExerciseList = [
  {
    name: "some exercise",
    sets: 3,
    repetitions:15,
    weight:100
  },
  {
    name: "some exercise",
    sets: 3,
    repetitions:15,
    weight:100
  },
  {
    name: "some exercise",
    sets: 3,
    repetitions:15,
    weight:100
}
]

const Day:React.FC<DayProps> = ({ exercises, day }) => {
  return (
    <main className=" mt-20 flex flex-col items-center" >
      <div className="flex gap-3">
        {
          mockExercisesList.map((exercise, index) => (
            <Fragment key={index}>
              <Exercise exercise={exercise}/>
            </Fragment>
          ))
        }
      </div>
    </main>
  )
}

export default Day