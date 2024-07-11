'use client'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'

const Slug = ({ content }: { content: any }) => {
  console.log(content.success)
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: content,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML())
    }
  })

  useEffect(() => {
    if (editor) {
      console.log(content.success)
      const q = editor.commands.setContent(content.success);
      console.log(q)
    }
  }, [editor, content])
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Slug
