import Forwardtext from '@/components/_chat/forwardtext'
import Question from '@/components/_chat/question'
import { useChat } from '@/context/chat'
import { content } from '@/services/chat_show.service'
import React from 'react'

async function data() {
  const chat = await content()
  return chat
}
const LLema = async () => {
  const chat = await data()
  return (
    <div className='flex gap-y-6 flex-col'>
      {chat.map(chat => chat.AiMessage.map(ai => (
        <Forwardtext message={ai.content} image='' />
      )))}
      <Question />
    </div>
  )
}

export default LLema
