'use client'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import React from 'react'
import Delete from './delete'

interface Paragrah {
  nice: string
  heading: string
  paragraph: string
  noteId: string
}
const Paragraph = ({ nice, heading, paragraph, noteId }: Paragrah) => {
  const router = useRouter()
  return (
    <div className=' h-full flex items-center cursor-pointer p-4'>
      <div className=' flex flex-col gap-y-2 w-full h-full justify-between' >
        <div className=' flex flex-col gap-y-4'>
          <h6 className='' onClick={() => router.push(`/nootbook/${heading}`)}>{heading}</h6>
          <p className=' text-[12px] break-words'>{paragraph.length > 8 ? paragraph.toString().slice(0, 100) : paragraph}....</p>
        </div>
        <div className='flex justify-between items-center'>
          {/* <Badge variant={null} className={` border rounded-full text-[12px]
      ${nice === 'Today' && 'border-blue-600 bg-blue-200'}
      ${nice === 'Yesterday' && 'border-purple-600 bg-purple-200'}
      ${nice === 'Day Before' && 'border-fuchsia-600'}`}>
            {nice}
          </Badge> */}
          <Delete noteId={noteId} />
        </div>

      </div >
    </div >
  )
}

export default Paragraph
