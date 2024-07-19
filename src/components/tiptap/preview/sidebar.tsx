'use client'
import React, { useEffect, useState } from 'react'
import Counter from '../counter'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { updateNotes } from '@/services/update_notes.service'
import type { Editor } from '@tiptap/react'
import Aiform from '../aiform'
import Youtube from '../youtube'
import FileUploader from '../uploader'
import { Loader } from 'lucide-react'
import { Clipboard } from './copy'

const Sidebar = ({ editor, noteId, setEdit }: { editor: Editor, noteId: string, setEdit: (data: boolean) => void }) => {

  // states

  const [saves, setSaves] = useState(false)
  console.log(saves)
  const [content, setContent] = useState<string>()
  const [editable, setEditor] = useState(false)
  const [copy, setCopy] = useState(false)

  // functions
  const handle = (data: string) => {
    setContent(data)
  }
  const editors = async () => {
    setSaves(true)
    await updateNotes(noteId, editor?.getHTML())
    setSaves(false)
  }
  const edit = () => {
    setEditor(!editable)
    setEdit(!editable)
  }


  useEffect(() => {
    editor?.chain().focus().insertContent(content).run()
  }, [content])


  console.log(content)
  return (
    <div className=' flex flex-col justify-between h-full overflow-y-auto ' style={{ scrollbarWidth: 'none' }}>
      <div className=' flex gap-x-6  justify-between'>
        <div className=' flex gap-x-6 border py-2 rounded-full px-4 mb-4'>
          <Switch onCheckedChange={() => edit()} />
          <p className=' text-[12px] items-center flex'>{editable ? 'Editable' : 'Edit'}</p>
        </div>
        <Clipboard noteId={noteId} />
      </div>
      <div className=' flex flex-col gap-y-2'>
        <Youtube editor={editor} disable={!editable} />
        <FileUploader editor={editor} disable={!editable} />
      </div>
      <Aiform pass={handle} disable={!editable} />
      <div className=' flex flex-col gap-y-6'>
        <Counter editor={editor} limit={4000} />
        <Button onClick={() => editors()}>{saves ? <div className=' flex gap-x-4 items-center'>
          <Loader className=' animate-spin w-4 h-4' />
          <p>saving</p>
        </div> : 'save'}</Button>
      </div>
    </div>
  )
}

export default Sidebar
