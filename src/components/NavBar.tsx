'use client'

import home from "@/../public/home.png" 
import { usePathname, useRouter } from "next/navigation"
import Button from "./Button"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import Avatar from "./Avatar"

export default function NavBar() {
  
  const router = useRouter()
  const path = usePathname()
  const { data: session } = useSession()
  
  const logOut = async () => {
    await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/`})
  }


  return (
    <main className="relative flex h-[6rem] flex-row-reverse items-center gap-4  w-full px-7 py-6 bg-slate-400/10">
      <div
        className="absolute left-20 bg-slate-300 rounded-full p-2 cursor-pointer active:translate-y-1 hover:scale-110 transition-all"
        onClick={()=>{ router.push('/')}}
      >
        <Image
          className=""
          src={home}
          width={32}
          height={12}
          alt="Home icon" />
      </div>
      {
        path !== '/login'&&!session && (
          <Button type={"button"} text="Login" clickHandler={() => { router.push('/login') }} />
        )
      }
      {
        path !== '/signin'&&!session && (
            <Button type={"button"} text="Sign up" clickHandler={()=>{router.push('/signup')}} />
        )
      }
      {
        session && (
            <Button type={"button"} text="Sign out" clickHandler={logOut} />
        )
      }
      <Avatar/>
    </main>
  )
}
