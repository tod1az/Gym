import { Days } from "@/lib/consts"
import type { Day } from "@/lib/types"
import clsx from "clsx"
import { useState } from "react"

const DayNav = () => {

  const [selected, setSelected ] = useState<Day>(Days.MONDAY)
  return (
    <nav className=" mt-5 flex justify-center">
        <ul className=" gap-3 flex bg-gray-700 justify-center items-center rounded-3xl absolute w-[35rem] h-[3rem] ">
          {
            Object.entries(Days).map(([key, value]) => (
              <li
                className={clsx(" text-gray-950/50 cursor-pointer capitalize",{"!text-white":selected === value})}
                key={key}
                onClick={() => {
                  setSelected(value)
                }}
              >
                {value}
              </li>
            ))
        }
        </ul>
    </nav>
  )
}

export default DayNav