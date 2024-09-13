'use client'
import React, { useEffect, useState } from 'react'
import Counter from '../counter'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { updateNotes } from '@/services/notes/update_notes.service'
import type { Editor } from '@tiptap/react'
import Aiform from '../aiform'
import Youtube from '../youtube'
import FileUploader from '../uploader'
import { Loader } from 'lucide-react'
import { Clipboard } from './copy'

const Sidebar = ({ editor, noteId, setEdit, isPreview }: { editor: Editor, noteId: string, setEdit: (data?: boolean) => void, isPreview: boolean }) => {

  // states

  const [saves, setSaves] = useState(false)
  console.log(saves)
  const [content, setContent] = useState<string>()
  const [editable, setEditor] = useState(false)

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
    editor?.chain().focus()?.insertContent(content ? content : '').run()
  }, [content])



  console.log(content)
  return (
    <div className=' flex flex-col justify-between h-full'>
      <div className=' flex justify-between flex-col gap-y-4 items-center py-2'>
        <Switch onCheckedChange={() => edit()} />
        <Clipboard noteId={noteId} />
        <Youtube editor={editor} disable={!editable} />
        <FileUploader editor={editor} disable={!editable} />
      </div >
      <div className=' flex flex-col gap-y-6'>
        <Counter editor={editor} limit={4000} />
        <Button onClick={() => editors()}>{saves ? <div className=' flex items-center'>
          <Loader className=' animate-spin w-4 h-4' />
        </div> : 'save'}</Button>
      </div>
    </div >
  )
}

export default Sidebar
