import { Editor, FloatingMenu } from '@tiptap/react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { MessageSquareCode, ListOrdered } from 'lucide-react'

const Hover = ({ editor }: { editor: Editor }) => {
  return (
    <div>
      <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className=" w-fit flex gap-x-1 border-2 p-1 rounded-lg ">
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={cn(editor?.isActive('heading', { level: 1 }) ? ' bg-purple-600 text-white' : '', 'w-6 h-6 border text-[12px]')}
          >
            H1
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={cn(editor?.isActive('heading', { level: 2 }) ? 'bg-purple-600 text-white' : '', 'w-6 h-6 border text-[12px]')}
          >
            H2
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            <MessageSquareCode strokeWidth={0.6} className={' w-4 h-4'} />
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            Quote
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            <ListOrdered strokeWidth={0.6} />
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            :
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            Horizontal rule
          </Button>
        </div>
      </FloatingMenu>
    </div>
  )
}

export default Hover
