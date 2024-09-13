'use client'
import { useEditor } from '@tiptap/react'
import React, { useEffect, useState } from 'react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'
import BulletList from '@tiptap/extension-list-keymap'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import BubbleMenu from '../bubbleMenu'
import Hover from '../floating'
import Editors from '..'
// import Sidebar from './sidebar'
import Sidebar from './sidebar'



const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})
const Slug = ({ content, noteId }: { content: any, noteId: string }) => {
  console.log(noteId)
  const [editable, setEditor] = useState(false)
  const handleEdit = (data: boolean) => {
    setEditor(data)
  }
  console.log(editable)
  console.log(content.success)
  const editor = useEditor({
    extensions: [
      Link.configure({
        openOnClick: true,
        autolink: true,
        protocols: ['https', 'http']
      }),
      Image,
      Highlight,
      BulletList,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      TextStyle,
      Color,
      StarterKit,
      Youtube,
      CustomTaskItem,
      TaskList,
      CharacterCount.configure({
        limit: 8000,
      })
    ],
    editorProps: {
      attributes: {
        class: 'prose [&_ol]:list-decimal [&_ul]:list-disc w-full h-[86vh] focus:outline-none overflow-y-auto p-4 absolute  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] selection:bg-slate-400',
      },
    },
    content: content,
    // onUpdate: async ({ editor }) => {
    //   console.log(editor)
    //   setSaves(true)
    //   const q = await updateNotes(noteId, editor.getHTML())
    //   setSaves(false)
    //   console.log(q.success)
    // },
  })

  useEffect(() => {
    if (editor) {
      const q = editor.commands.setContent(content);
      console.log(q)
    }
    editor?.setEditable(editable)
    console.log(editable)
  }, [editor, content, editable])
  return (
    <ResizablePanelGroup direction='horizontal'>
      <ResizablePanel defaultSize={90} maxSize={90} style={{ scrollbarWidth: "none" }} className=' w-full h-full'>
        <BubbleMenu editor={editor} />
        <Hover editor={editor} />
        <Editors editor={editor} />
      </ResizablePanel>
      <ResizablePanel defaultSize={6} maxSize={6} className=' p-2'>
        <Sidebar editor={editor} setEdit={setEditor} noteId={noteId} />
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default Slug
