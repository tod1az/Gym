'use client'
import Day from "@/components/Day"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { Days } from "@/lib/consts"
import DayNav from "@/components/DayNav"


const Profile = () => {

    const { data:session } = useSession() 
  
  return (
    <main className=" pt-10 flex flex-col justify-items-center items-center">
      {
        session&&(
            <>
              <span className="" >{session.user?.name}</span>
              <Image
                className="rounded-full"
                src={session.user?.image as string}
                alt={session.user?.name as string}
                width={100}
                height={100}
                quality={100}
              />
              <span >{session.user?.email}</span>
            </>
          )
      }
      <DayNav/>
      <Day exercises={[]} day={Days.MONDAY} />
    </main>
  )
}

export default Profile