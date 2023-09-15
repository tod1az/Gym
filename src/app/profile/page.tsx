'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"

const Profile = () => {

    const { data:session } = useSession() 
  
  return (
    <main className=" pt-10 flex flex-col justify-items-center items-center">
      <h1 className="text-3xl p-4">Profile </h1>
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
    </main>
  )
}

export default Profile