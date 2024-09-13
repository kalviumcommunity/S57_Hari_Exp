'use client'
import React from 'react'
import { Button } from '../ui/button'
import { sendChat } from '@/services/chat/chat.service'
import { Loader } from 'lucide-react'
import { useChat } from "ai/react"
import { Input } from '../ui/input'


const ChatInput = ({ sessionId }: { sessionId: string }) => {
  const {
    handleSubmit,
    messages,
    input,
    handleInputChange,
    isLoading } = useChat(
      {
        body: { sessionId },
        api: "/api/syncro"
      }
    );
  return (
    <>
      <div>
        {JSON.stringify(messages)}
      </div>
      <form className=' flex w-[80%] justify-center gap-x-1 items-center p-6  fixed bg-transparent' onSubmit={handleSubmit}
      >
        <input
          className=' resize-none  flex-1'
        // value={input}
        // onChange={(e) => handleInputChange(e.target.value)}

        />
        <Button
          disabled={isLoading}
          variant={null}
          type='submit'>
          {isLoading ? <Loader className=" animate-spin" /> : "Submit"}
        </Button>
      </form >
    </>
  )
}

export default ChatInput
