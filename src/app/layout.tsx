import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/app/Session/_app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar/>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
