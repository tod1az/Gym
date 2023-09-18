'use client'

import Input from "@/components/Input"
import {  ExerciseType } from "@/lib/types"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { mockExercisesList } from "@/components/Day"
import { useRouter } from "next/navigation"

const NewExercise = () => {

  const router = useRouter()
  const params = useSearchParams()
  const [exercise, setExercise] = useState<ExerciseType>({
    name: "",
    repetitions: 0,
    sets: 0,
    weight:0
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExercise({...exercise,[e.target.name]:e.target.value})
  }

  const addExercise = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    mockExercisesList.push(exercise)//reemplazar por servicio para agregar ejercicio a la rutina
    router.push("/profile")
  }
  return (
      <main className="flex flex-col py-10   items-center justify-center">
        <form onSubmit={addExercise}
          className="flex  flex-col pb-20 text-cente border border-white gap-4 text-center rounded-lg bg-gray-900 w-[20rem] ">
        <p className="p-10 text-3xl font-bold ">
          New Exercise {params && <small className="text-xs capitalize">{params.get("day")}</small>}
        </p>
          <label htmlFor="">Name</label>
          <Input type="text"  value={exercise.name} change={changeHandler} placeholder="name" />
        
          <label htmlFor="">Sets</label>
          <Input type="text"  value={exercise.sets} change={changeHandler} placeholder="sets" />
        
          <label htmlFor="">Repetitions</label>
          <Input type="text"  value={exercise.repetitions} change={changeHandler} placeholder="repetitions" />
        
          <label htmlFor="">Weight</label>
          <Input type="text"  value={exercise.weight} change={changeHandler} placeholder="weight" />
        
          <button
            className="border border-white place-self-center rounded-lg w-[6rem] bg-gray-950  px-1 py-1"
          >
            Save
          </button>
        </form>
      </main>
  )
}

export default NewExercise
