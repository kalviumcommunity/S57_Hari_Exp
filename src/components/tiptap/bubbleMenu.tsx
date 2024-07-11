import React, { useCallback } from 'react'
import { Button } from '../ui/button'
import { Editor } from '@tiptap/react'
import { Image } from 'lucide-react'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'

const Bubble = dynamic(() => import('./bubble'))

interface BubbleMenu {
  editor: Editor
}
const BubbleMenu = ({ editor }: { editor: Editor }) => {

  const options = [
    {
      function: () => editor?.chain().focus().toggleHighlight().run(),
      isActive: editor?.isActive('highlight'),
      name: 'highlight'
    },
    {
      function: () => editor?.chain().focus().toggleItalic().run(),
      isActive: editor?.isActive('italic'),
      name: 'italic'
    },
    {
      function: () => editor?.chain().focus().toggleStrike().run(),
      isActive: editor?.isActive('strike'),
      name: 'strike'
    },
    {
      function: () => editor?.chain().focus().setTextAlign('center').run(),
      isActive: editor?.isActive('center'),
      name: 'center'
    },
    {
      function: () => editor?.chain().focus().setTextAlign('left').run(),
      isActive: editor?.isActive('left'),
      name: 'left'
    },
    {
      function: useCallback(() => {
        const url = editor.getAttributes('link')
        const prompt = window.prompt('url', url)
        if (prompt === null) {
          return
        }
        if (prompt === '') {
          editor.chain().extendMarkRange('link').unsetLink().run()
        }
        if (prompt !== '') {
          editor?.chain().extendMarkRange('link').setLink({ href: prompt }).run()
        }
      }, [editor]),
      isActive: editor?.isActive('link'),
      name: 'link'
    }
  ]
  return (
    <div>
      {editor &&
        <Bubble editor={editor} options={options} />
      }
    </div>
  )
}

export default BubbleMenu
