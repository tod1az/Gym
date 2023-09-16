import { GoPencil } from "react-icons/go"
import { useState } from "react"
import clsx from "clsx"
import { type ExerciseProps, type ExerciseType } from "@/lib/types"
import EditExercise from "./EditExercise"

const Exercise: React.FC<ExerciseProps> = (props) => {

  const [editing, setEditing] = useState(false)
  const [exercise, setExercise] = useState<ExerciseType>(props.exercise)

  const handleSave = (modified:ExerciseType) => {
    setEditing(!editing)
    setExercise(modified)
  }
  
  return (
    <main
      className="flex flex-col gap-4 rounded-lg w-[16rem] mt-3  h-[22rem] justify-center items-center  bg-gray-700"
    >
      {
        Object.entries(exercise).map(([key, value]) => (
          <div
            className="w-max relative text-center"
            key={key}>
              <h1 className="capitalize font-bold text-xl" >{key}</h1>
              <p className="whitespace-nowrap capitalize">{ value }</p>
            </div>
        ))
      }
      <div
        className="cursor-pointer hover:scale-110 active:translate-y-1 transition-all"
        onClick={() => setEditing(!editing)}
      >
      <GoPencil />     
      </div>
      {
        editing&&<EditExercise exercise={exercise} save={handleSave}/>
      }
    </main>
  )
}

export default Exercise