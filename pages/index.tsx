import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black'>
      <h1 className='text-lg'>sample</h1>
    </div>
  )
}

