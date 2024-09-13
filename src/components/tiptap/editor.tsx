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
import Tools from './generator'
import History from '@tiptap/extension-history'


// const CustomTaskItem = TaskItem.extend({
//   content: 'inline*',
// })
const Editor = () => {
  const editor = useEditor({
    extensions: [
      Link.configure({
        openOnClick: true,
        autolink: true,
        protocols: ['https', 'http'],
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
      // CustomTaskItem,
      TaskList.configure(),
      TaskItem.configure({

      }),
      CharacterCount.configure({
        limit: 6000,
      })
    ],

    editorProps: {
      attributes: {
        class: 'prose [&_ol]:list-decimal [&_ul]:list-disc w-full h-[86vh] focus:outline-none overflow-y-auto absolute p-4 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] selection:bg-slate-400',
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
      <ResizablePanelGroup direction="horizontal" className=' w-full' >
        <Provider>
          <div className=' w-[93%] h-full overflow-clip' style={{ scrollbarWidth: "none" }}>
            <div className=' h-full w-full' >
              <BubbleMenu editor={editor} />
              <Hover editor={editor} />
              <Editors editor={editor} />
            </div>
          </div>
          <div className=' p-2 w-[7%]'
          >
            <Tools editor={editor} />
          </div>
        </Provider>
      </ResizablePanelGroup>
    </>
  )
}

export default Editor
