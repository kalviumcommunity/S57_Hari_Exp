'use client'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Paragrah {
  nice: string
  heading: string
  paragraph: string
}
const Paragraph = ({ nice, heading, paragraph }: Paragrah) => {
  const router = useRouter()
  return (
    <div className=' h-[40%] flex justify-between p-2 items-center cursor-pointer' onClick={() => router.push(`${heading}`)}>
      <div className=' flex flex-col gap-y-2 w-full'>
        <h6 className=' select-none'>{heading}</h6>
        <div className=' flex justify-between w-full items-center'>
          <p className=' text-[12px] select-none'>{paragraph.length > 8 ? paragraph.slice(0, 24) : paragraph}....</p>
          <Badge variant={null} className={` border rounded-full flex text-[12px]
      ${nice === 'Today' && 'border-blue-600 bg-blue-200'}
      ${nice === 'Yesterday' && 'border-purple-600 bg-purple-200'}
      ${nice === 'Day Before' && 'border-fuchsia-600'}`}>
            {nice}
          </Badge>
        </div >
      </div >
    </div >
  )
}

export default Paragraph
