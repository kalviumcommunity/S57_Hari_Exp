import React from 'react'
import { BubbleMenu } from '@tiptap/react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
const Bubble = ({ editor, options }: any) => {
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className=' flex gap-x-1 border-2 p-1 rounded-lg backdrop-blur-3xl w-fit'>
      {options.map((option, i) => (
        <Button
          key={i}
          className={cn(option.isActive ? ' bg-purple-600 text-white' : '', 'w-full h-6 border text-[12px] px-4')}
          variant={null}
          onClick={option.function}
          size={"icon"}
        >
          {option.name}
        </Button>
      ))}

    </BubbleMenu >
  )
}

export default Bubble
