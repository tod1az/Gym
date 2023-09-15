'use client'

import { useState } from 'react'
import Input from "@/components/Input"
import Button from "@/components/Button"
import Link from "next/link"
import GoogleButton from "@/components/GoogleButton"
import { type ClickEvent } from '@/lib/types' 


export default function Login() {

  const handleClick =  (e:ClickEvent) => {
    e.preventDefault() 
  }
  return (
    <main className="flex flex-col py-10   items-center justify-center">
      <form action=""
        className="flex  flex-col pb-20 text-cente border border-white gap-4 text-center rounded-lg bg-gray-900 w-[20rem] ">
        <p className="p-10 text-3xl ">Login</p>
        <label htmlFor="">Email</label>
        <Input type="text" placeholder="Email" />
        <label htmlFor="">Password</label>
        <Input type="password" placeholder="Password" />
        <Button type={"Submit"} text="Login" clickHandler={handleClick} />
        <GoogleButton/>
        <small>
          {`Or you can signin `}
          <Link
            className="text-purple-400 hover:text-purple-600 cursor-pointer transition"
            href={'/signin'}> here</Link>
        </small>
      </form>
    </main>
  )
}
