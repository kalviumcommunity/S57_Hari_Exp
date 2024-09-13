import React from 'react'
import type { Editor } from '@tiptap/react'
// import image from '../../../public/picture-svgrepo-com.svg'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ImageFromLink = ({ editor }: { editor: Editor }) => {
  const handleImage = () => {
    const url = window.prompt('Enter image Url')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleImage} variant={null} className='  hover:bg-blue-50  text-[12px] h-[6vh] gap-x-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='left'>
          <p className=' text-[12px]'>Image url</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ImageFromLink
