'use client'
import { type InputProps } from "@/lib/types"

const Input: React.FC<InputProps> = ({ type, placeholder, change, value }) => {

  if (typeof placeholder === 'number') {
    placeholder = String(placeholder)
  }

  return (
    <input
        type={type}
        className="p-2 border outline-none  border-white w-[15rem] place-self-center bg-gray-500 text-white rounded-lg"
        placeholder={placeholder}
        onChange={change}
        name={placeholder}
      value={value}
      />
  )
}

export default Input