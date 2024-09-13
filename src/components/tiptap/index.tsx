import { EditorContent, type Editor } from '@tiptap/react'
import React from 'react'


const Editors = ({ editor }: { editor: Editor }) => {
  return (
    <EditorContent editor={editor} contentEditable="inherit" />
  )
}

export default Editors
