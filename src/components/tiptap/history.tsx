
import React from 'react'
import { Button } from '../ui/button'
import { Editor } from '@tiptap/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const Historys = ({ editor }: { editor: Editor }) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={null}
              className=' relative hover:bg-blue-50 justify-center flex items-center text-[12px] gap-x-4 rounded-full cursor-pointer'
              onClick={() => editor.chain().focus().undo().run()} disabled={!editor?.can().undo()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" /></svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent side='left' className=' text-[12px]'>
            Undo
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={null}
              className=' relative hover:bg-blue-50 justify-center flex items-center text-[12px] gap-x-4 rounded-full cursor-pointer'
              onClick={() => editor.chain().focus().redo().run()} disabled={!editor?.can().redo()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo"><path d="M21 7v6h-6" /><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" /></svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent side='left' className='text-[12px]'>
            Redo
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

export default Historys
