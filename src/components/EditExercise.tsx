import { EditExerciseProprs, ExerciseType } from "@/lib/types"
import Button from "./Button"
import { useState } from "react"


const EditExercise: React.FC<EditExerciseProprs> = ({ exercise, save }) => {
  
  const [modifiedExercise, setModifiedExercise] = useState<ExerciseType>(exercise)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setModifiedExercise({ ...modifiedExercise, [e.target.name]: e.target.value })
    } else {
      setModifiedExercise({ ...modifiedExercise, [e.target.name]: Number(e.target.value) })
    }
  }


  return (
    <main className="flex absolute gap-4  bg-gray-900 w-[16rem] text-white  h-[22rem]  px-[1.18rem] py-6 rounded-lg flex-col">
      {
        Object.entries(modifiedExercise).map(([key, value]) => (
          <div
            className="w-max  left-0.5 text-center"
            key={key}>
              <h1 className="capitalize font-bold text-xl" >{key}</h1>
            <input type="text" name={key} className="text-black" value={value} onChange={handleChange} />
            </div>
        ))
      }
      <Button type={"button"} text="Save" clickHandler={()=>save(modifiedExercise)}/>
    </main>
  )
}

export default EditExercise