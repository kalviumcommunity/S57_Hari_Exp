import React, { useEffect, useState } from 'react'
import type { Editor } from '@tiptap/react'
import Counter from './counter'
import Aiform from './aiform'
import Youtube from './youtube'
import ImageFromLink from './image from link'
import Save from './save'
import FileUploader from './uploader'
import { aiEditor } from '@/services/editor.service'
import History from './history'


// const FileUploader = dynamic(() => import('./uploader'))
// const ImageFromLink = dynamic(() => import('./image from link'))
// const Youtube = dynamic(() => import('./youtube'))
// const Save = dynamic(() => import('./save'))


const Tools = ({ editor }: { editor: Editor }) => {
  const [content, setContent] = useState<string>()
  useEffect(() => {
    editor?.chain()?.focus()?.insertContent(content).run()
  }, [content, editor])
  const handle = (data: string) => {
    setContent(data ? data : '')
  }
  return (
    <div className=' w-full h-full flex flex-col gap-y-6 p-2 border rounded-[12px] items-center justify-between'>
      <div className=' flex flex-col gap-y-4'>
        <div className=' w-full flex flex-col gap-y-2'>
          <Youtube editor={editor} />
          <ImageFromLink editor={editor} />
          <FileUploader disable={false} editor={editor} />
        </div>
        <hr />
        <div className=' w-full flex flex-col gap-y-2'>
          <History editor={editor} />
        </div>
      </div>
      <div className=' w-full flex justify-between items-center max-lg:justify-center max-lg:gap-y-6 max-lg:flex-col flex-col-reverse gap-y-4'>
        <Save editor={editor} />
        {/* <Counter editor={editor} limit={4000} /> */}
      </div>
    </div>
  )
}

export default Tools
