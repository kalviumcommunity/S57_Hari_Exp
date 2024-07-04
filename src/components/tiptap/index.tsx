import { aiEditor } from '@/services/editor.service'
import { EditorContent, EditorOptions } from '@tiptap/react'
import React from 'react'


const Editors = ({ editor }: EditorOptions) => {
  return (
    <EditorContent editor={editor} className=' w-full h-[64vh]' contentEditable="inherit" />
  )
}

export default Editors
