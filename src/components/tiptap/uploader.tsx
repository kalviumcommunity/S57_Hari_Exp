import React from 'react'
import { Input } from '../ui/input'
import type { Editor } from '@tiptap/react'
import image from '../../../public/picture-svgrepo-com.svg'
import Image from 'next/image'
import { Button } from '../ui/button'

const FileUploader = ({ editor, disable }: { editor: Editor, disable: boolean }) => {
  const addImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const readFile = new FileReader()
      readFile.onloadend = () => {
        editor.chain().focus().setImage({ src: readFile.result }).run()
      }
      readFile.readAsDataURL(file)
    }
  }
  return (
    <Button

      variant={null}
      disabled={disable}
      className=' relative border-dashed  border border-sky-600 rounded-lg h-[6vh] justify-center flex items-center text-[12px] gap-x-4'>
      <Input
        type='file'
        onChange={(e) => addImage(e)}
        accept='image/png , image/jpeg'
        className='  absolute border opacity-0'
      />
      <svg fill="#000000" height="20px" width="20px" viewBox="0 0 485 485">
        <g>
          <polygon points="30,30 106,30 106,0 0,0 0,106 30,106 	" />
          <polygon points="379,0 379,30 455,30 455,106 485,106 485,0 	" />
          <polygon points="455,455 379,455 379,485 485,485 485,379 455,379 	" />
          <polygon points="30,379 0,379 0,485 106,485 106,455 30,455 	" />
          <path d="M274.405,175c26.191,0,47.5-21.309,47.5-47.5S300.597,80,274.405,80s-47.5,21.309-47.5,47.5S248.214,175,274.405,175z" />
          <polygon points="80,405 405,405 405,308.18 346.358,246.304 275.241,287.672 176.238,216.922 80,318.465 	" />
        </g>
      </svg>
      <p className=' max-lg:hidden'>Upload image from file</p>
    </Button>
  )
}

export default FileUploader
