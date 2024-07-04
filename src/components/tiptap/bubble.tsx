import React from 'react'
import { BubbleMenu } from '@tiptap/react'
import { Button } from '../ui/button'
const Bubble = ({ editor, options }: any) => {
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className=' backdrop-blur-sm'>
      <div className=' flex gap-x-1'>
        {options.map(option => option.heading.map(option => (
          <Button
            className={option.isActive}
            onClick={option.function}
            size={option.size}
          >
            {option.icon}
          </Button>
        )))}
      </div>

    </BubbleMenu >
  )
}

export default Bubble
