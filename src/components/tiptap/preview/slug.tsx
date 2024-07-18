'use client'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useDeferredValue, useEffect, useState } from 'react'
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
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button'
import { updateNotes } from '@/services/update_notes.service'
import Counter from '../counter'
// import Sidebar from './sidebar'
import dynamic from 'next/dynamic'
import Sidebar from './sidebar'



const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})
const Slug = ({ content, noteId }: { content: any, noteId: string }) => {
  console.log(noteId)
  const [saves, setSaves] = useState(false)
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
        limit: 800,
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
    const boolean = editor?.setEditable(editable)
    console.log(editable)
  }, [editor, content, editable])
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel style={{ scrollbarWidth: 'none' }} className=' w-full h-full overflow-clip' maxSize={100} defaultSize={80}>
        <div className=' h-full'>
          <BubbleMenu editor={editor} />
          <Hover editor={editor} />
          <Editors editor={editor} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className=' w-[25%] h-full p-2 flex flex-col gap-y-6 justify-center ' maxSize={20} minSize={0} defaultSize={20}
        onChange={(e) => console.log(e)}
      >
        <Sidebar editor={editor} noteId={noteId} setEdit={handleEdit} />
      </ResizablePanel>
    </ResizablePanelGroup >
  )
}

export default Slug
