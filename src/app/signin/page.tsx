'use client'

import Button from "@/components/Button"
import Input from "@/components/Input"
import GoogleButton from "@/components/GoogleButton"

const Signin = () => {
  return (
    <main className="flex flex-col py-10   items-center justify-center">
      <form action=""
        className="flex  flex-col pb-20 text-cente border border-white gap-2 text-center rounded-lg bg-gray-900 w-[20rem] ">
        <p className="p-10 text-3xl ">Sign in</p>
        <label  htmlFor="">Email</label>
        <Input type="text" placeholder="Email" />

        <label  htmlFor="">Password</label>
        <Input type="password" placeholder="Password" />

        <label htmlFor=""> Confirm Password</label>
        <Input type="password" placeholder="Password" />

        <Button type={"Submit"} text="Sign In" clickHandler={() => { console.log('clicked') }} />
        <GoogleButton/> 
      </form>
    </main>
  )
}

export default Signin