'use client'

import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const Avatar: React.FC = () => {
  const { data:session } = useSession()
  return (
    <>
      {
        session && (
          <Link href="/profile">
            <Image
              className="rounded-full border border-white hover:border-2 transition"
              src={session.user?.image as string}
              alt="user image"
              width={60}
              height={60}
            />
          </Link>
        )
      }
    </>
  )
}

export default Avatar