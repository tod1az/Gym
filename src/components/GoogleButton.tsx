import { FcGoogle } from "react-icons/fc"
import { signIn,  } from "next-auth/react"
import { useRouter } from "next/navigation"
const GoogleButton: React.FC = () => {
  const router = useRouter()
  const handleClick = async () => {
    await signIn("google",{ callbackUrl:`${process.env.NEXT_PUBLIC_URL}/profile` })
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="mt-2 flex gap-2 cursor-pointer items-center border hover:scale-110 active:translate-y-1 bg-black  border-white px-4 py-1 rounded-lg  place-self-center transition">
      <FcGoogle/><p>Sign in with Google</p>
    </button>
  )
}

export default GoogleButton