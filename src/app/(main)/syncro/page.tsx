'use client'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
import Forwardtext from '@/components/_chat/forwardtext'
import Question from '@/components/_chat/question'



const Syncro = () => {



  return (
    <div className=' w-full h-full flex flex-col justify-between'>
      <div className=' w-full h-[90%] p-3 gap-y-6 flex flex-col overflow-y-auto' style={{ scrollbarWidth: 'thin' }}>

        <Forwardtext />
        <Question />
      </div>
      <div className=' w-full h-[20%] flex items-center'>
        <form action={''} className=' flex h-full w-full justify-center gap-x-1 items-center '>
          <Textarea className=' w-[80%] rounded-lg block resize-none' />
          <Button variant={null} className=' '><Send /></Button>
        </form>


      </div>
    </div >
  )
}

export default Syncro
