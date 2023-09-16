import { GoPencil } from "react-icons/go"
import { useState } from "react"
import Button from "./Button"
import { type ExerciseProps, type ExerciseType } from "@/lib/types"

const Exercise:React.FC<ExerciseProps> = (props) => {

  const [editing, setEditing] = useState(false)
  const [ exercise, setExercise ] = useState<ExerciseType>(props.exercise)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setExercise({...exercise,[e.target.name]:e.target.value})
    } else {
      setExercise({...exercise,[e.target.name]:Number(e.target.value)})
    }
  }

  const handleSave = () => {
    setEditing(!editing)
  }
  
  return (
    <main className="flex gap-14 rounded-lg mt-3 p-7 h-[8rem] justify-center items-center  bg-gray-700">
      {
        Object.entries(exercise).map(([key, value]) => (
          <div
            className="w-max text-center"
            key={key}>
              <h1 className="capitalize font-bold text-xl" >{key}</h1>
            {editing
              ? <input
                className="w-max text-black"
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
              />
              : <p className="whitespace-nowrap capitalize">{ value }</p>
            }
            </div>
        ))
      }
      <div
        className="cursor-pointer hover:scale-110 active:translate-y-1 transition-all"
        onClick={() => setEditing(!editing)}
      >
      {
        editing
          ?<Button type={"button"} text="Save" clickHandler={handleSave} />
          :<GoPencil />    
      }
      </div>
    </main>
  )
}

export default Exercise