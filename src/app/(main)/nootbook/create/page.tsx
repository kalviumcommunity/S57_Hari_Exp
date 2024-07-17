import React from 'react'
import Editor from '@/components/tiptap/editor'
import Provider from '@/context/chat'

export const runtime = "edge"

const Page = () => {
  return (
    <>
      <Provider>
        <Editor />
      </Provider>
    </>
  )
}

export default Page