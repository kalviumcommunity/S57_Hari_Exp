import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from '../ui/button'
import { Editor, EditorProviderProps } from '@tiptap/react'
import { Bold, Italic, Strikethrough, MessageSquareQuote, Highlighter, Type, Image } from 'lucide-react'
import { cn } from '@/lib/utils'
import AiEditor from './input'
import dynamic from 'next/dynamic'

const Bubble = dynamic(() => import('./bubble'))

interface BubbleMenu {
  editor: Editor
}
const BubbleMenu = ({ editor }: EditorProviderProps) => {
  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }
  const options = [
    {
      heading: [
        {
          function: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: cn(editor?.isActive('heading', { level: 1 })),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: cn(editor?.isActive('heading', { level: 2 })),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
          isActive: cn(editor?.isActive('heading', { level: 3 })),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
      ],
      style: [
        {
          function: () => editor?.chain().focus().toggleBold().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleBlockquote().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <MessageSquareQuote size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleBulletList().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleCode().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleCodeBlock().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleItalic().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
        {
          function: () => editor?.chain().focus().toggleStrike().run(),
          isActive: cn(editor?.isActive('bold')),
          size: "icon",
          icon: <Italic size={16} strokeWidth={1} />
        },
      ],
      highlight: [
        {
          function: () => editor.chain().setHighlight().run(),
          size: "icon",
          icon: <Highlighter size={16} strokeWidth={1} />

        }
      ]
    },
  ]
  // console.log(options.filter(option => option.icon.toString()))
  return (
    <div>
      {editor &&
        <Bubble editor={editor} options={options} />
      }
      <Menubar className=' p-6 flex justify-center items-center rounded-full backdrop-blur-xl bg-transparent'>
        <Button
          className={cn('' ? 'bg-slate-100' : '')}
          onClick={addImage}
          size={"icon"}
          variant={null}
        >
          <Image />
        </Button>
        <MenubarMenu>
          <MenubarTrigger><Highlighter /></MenubarTrigger>
          <MenubarContent side={"top"}>
            {options.map(options => options.highlight.map(option => (
              <Button
                className={cn(option.isActive ? 'bg-slate-100' : '')}
                onClick={option.function}
                size={option.size}
              >
                {option.icon}
              </Button>
            ))
            )}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger><Type /></MenubarTrigger>
          <MenubarContent className=' flex gap-x-1'>
            {options.map(options => options.style.map(option => (
              <Button
                className={cn(option.isActive ? 'bg-slate-100' : '')}
                onClick={option.function}
                size={option.size}
                variant={null}
              >
                {option.icon}
              </Button>
            ))
            )}
          </MenubarContent>
        </MenubarMenu>
        <AiEditor />
      </Menubar>
    </div>
  )
}

export default BubbleMenu
