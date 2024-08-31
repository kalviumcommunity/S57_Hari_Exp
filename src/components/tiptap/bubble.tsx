import React from 'react'
import { BubbleMenu } from '@tiptap/react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
const Bubble = ({ editor, options }: any) => {
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className=' items-center flex gap-x-1 border-2 p-1 rounded-lg backdrop-blur-3xl w-fit'>
      <Input
        className='w-full h-6'
        type='color'
        onInput={(event) => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
      />
      {options.map((option: { isActive: any; function: React.MouseEventHandler<HTMLButtonElement> | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }, i: React.Key | null | undefined) => (
        <>
          <Button
            key={i}
            className={cn(option.isActive ? ' bg-purple-600 text-white' : '', 'w-full h-6 border text-[12px] px-4')}
            variant={null}
            onClick={option.function}
            size={"icon"}
          >
            {option.name}
          </Button>
        </>
      ))}

    </BubbleMenu >
  )
}

export default Bubble
