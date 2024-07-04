'use client'
import { useEditor } from '@tiptap/react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Counter from './counter'
import BubbleMenu from './bubbleMenu'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import { save } from '@/services/save.service'
import Editors from '.'
// import Editors from '.'
// import { aiEditor } from '@/services/editor.service'
// import Editors from '.'


const limit = 380
const Editor = () => {
  const editor = useEditor({
    extensions: [
      Image,
      Highlight,
      TextAlign,
      Document, Paragraph, Text, TextStyle, Color, Heading.configure({
        levels: [1, 2, 3]
      }),
      CharacterCount.configure({
        limit,
      })
    ],

    editorProps: {
      attributes: {
        class: 'w-full h-[64vh] mx-auto focus:outline-none overflow-y-auto p-4 absolute  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
      },
    },
    enablePasteRules: true,
    content: "",
  })
  // async function send() {
  //   const sned = await save(editor?.getHTML())
  // }
  return (
    <div>
      <BubbleMenu editor={editor} />
      <div className=' w-full h-full flex  flex-col  '>
        <Editors editor={editor} />
        <div className=' flex flex-col gap-y-6'>
          {/* <Button onClick={() => send()}>llema</Button> */}
          <Counter editor={editor} limit={limit} />
        </div>
      </div>
    </div>
  )
}

export default Editor
