import Image from 'next/image'
import React from 'react'
import ai from '../../../public/opal_16147440.svg'
import { cn } from '@/lib/utils'

interface ChatInterface {
  imageShown: boolean
  message: string
  className?: string
}
const Forwardtext = ({ imageShown, message, className }: ChatInterface) => {
  return (
    <div className=' w-[50%]'>
      <div className=' bg-slate-100 w-full p-4 rounded-r-2xl rounded-b-2xl text-[13px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti sit labore consectetur ipsum autem tempora, nesciunt tenetur impedit accusamus. Eius harum perferendis aliquid quae. Dolorem numquam facilis aliquid cumque.
        lore
      </div>
    </div>
  )
}

export default Forwardtext
