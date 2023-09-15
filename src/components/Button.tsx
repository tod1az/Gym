'use client'

import { type ButtonProps } from "@/lib/types"


const Button: React.FC<ButtonProps> = ({ type, text, clickHandler }) => {
  return (
    <button
      className='mt-2 border hover:scale-110 active:translate-y-1 bg-black  border-white px-4 py-1 rounded-lg  place-self-center transition'
      type={type} onClick={clickHandler}>{text}</button>
  )
}

export default Button