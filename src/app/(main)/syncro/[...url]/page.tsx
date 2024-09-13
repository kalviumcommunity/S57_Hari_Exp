import React from 'react'
import ChatInput from '@/components/ai/chat'
import LLema from '@/components/ai/syncro'
import { ragChat } from '@/lib/ragChat'
import { users } from '@/services/auth/auth.service'

// export const runtime = 'edge'

interface SyncroInterface {
  params: {
    url: string[] | undefined
  }
}

export default async function Page({ params }: SyncroInterface) {

  const { user } = await users()
  const sessionId = user?.id


  //eg: [http%3,enxtjs,com]
  // docding the url and joining as /
  console.log(params)
  const decodeUrl = params.url?.map(url => decodeURIComponent(url)).join('/') as string
  console.log(decodeUrl)


  // sending the url

  const chat = await ragChat.context.add({
    source: decodeUrl,
    type: "html",
    config: { chunkOverlap: 40, chunkSize: 400 },
  })


  return (
    <div className=' w-full h-full grid grid-rows-7'>
      <div className=' w-full row-span-6 p-6 h-full overflow-y-auto'>
        {/* <LLema /> */}
      </div>
      <div className=' h-fit w-full row-span-1 flex items-center justify-center p-6 fixed top-[88vh] backdrop-blur-sm'>
        {/* <ChatInput sessionId={sessionId as string} /> */}
      </div>
    </div>
  )
}

