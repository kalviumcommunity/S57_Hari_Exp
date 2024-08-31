import { Editor, FloatingMenu } from '@tiptap/react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Icons } from '../icons'


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
            {Icons.Bubble.code}
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            {Icons.Bubble.quote}
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            {Icons.Bubble.order}
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >

          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className={cn(editor?.isActive('bold') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            {Icons.Bubble.horizontal}
          </Button>
          <Button
            variant={null}
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={cn(editor?.isActive('taskList') ? 'bg-purple-600 text-white' : '', 'w-full text-[12px] h-6 border')}
          >
            task list
          </Button>
        </div>
      </FloatingMenu>
    </div>
  )
}

export default Hover
