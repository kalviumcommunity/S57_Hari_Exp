'use client'
import { useEditor } from '@tiptap/react'
import React from 'react'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'
import BulletList from '@tiptap/extension-list-keymap'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import StarterKit from '@tiptap/starter-kit'
import { ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import AiGenerator from './generator'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import Editors from '.'
import BubbleMenu from './bubbleMenu'
import Hover from './floating'
import Provider from '@/context/chat'



const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})
const Editor = () => {
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
      TaskItem.configure({
        nested: true,
      }),
      CharacterCount.configure({
        limit: 4000,
      })
    ],

    editorProps: {
      attributes: {
        class: 'prose [&_ol]:list-decimal [&_ul]:list-disc w-full h-[86vh] focus:outline-none overflow-y-auto p-4 absolute  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] selection:bg-slate-400',
      },
    },
    enablePasteRules: true,
  })

  // useEffect(() => {
  //   function async() {
  //     const tags = useTagContext()
  //     console.log(tags?.tags)
  //     editor?.commands.setContent(tags?.tags!)
  //   }
  //   async()
  // }, [])
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <Provider>
          <ResizablePanel className=' w-full h-full overflow-clip' maxSize={100} defaultSize={80}>
            <div className=' h-full'>
              <BubbleMenu editor={editor} />
              <Hover editor={editor} />
              <Editors editor={editor} />
            </div>
          </ResizablePanel>
          <ResizablePanel className=' w-[25%] h-full p-2 ' maxSize={20} defaultSize={20}
            onChange={(e) => console.log(e)}
          >
            <AiGenerator editor={editor} />
          </ResizablePanel>
        </Provider>
      </ResizablePanelGroup>
    </>
  )
}

export default Editor
