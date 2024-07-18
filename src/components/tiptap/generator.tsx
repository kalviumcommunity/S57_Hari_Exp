import React, { useEffect, useState } from 'react'
import type { Editor } from '@tiptap/react'
import Counter from './counter'
import Aiform from './aiform'
import Youtube from './youtube'
import ImageFromLink from './image from link'
import Save from './save'
import FileUploader from './uploader'
import { aiEditor } from '@/services/editor.service'


// const FileUploader = dynamic(() => import('./uploader'))
// const ImageFromLink = dynamic(() => import('./image from link'))
// const Youtube = dynamic(() => import('./youtube'))
// const Save = dynamic(() => import('./save'))


const AiGenerator = ({ editor }: { editor: Editor }) => {
  const [content, setContent] = useState()
  useEffect(() => {
    editor?.chain()?.focus()?.insertContent(content).run()
  }, [content])
  const handle = (data: string) => {
    setContent(data)
  }
  return (
    <div className=' w-full h-full flex flex-col gap-y-6 justify-between p-2 py-2 border rounded-sm max-lg:'>
      <div className=' w-full flex flex-col gap-y-2'>
        <Youtube editor={editor} />
        <ImageFromLink editor={editor} />
        <FileUploader disable={false} editor={editor} />
        <Aiform service={aiEditor} pass={handle} />
      </div>
      <div className=' w-full flex justify-between items-center max-lg:justify-center max-lg:gap-y-6 max-lg:flex-col-reverse'>
        <Save editor={editor} />
        <Counter editor={editor} limit={800} />
      </div>
    </div>
  )
}

export default AiGenerator
