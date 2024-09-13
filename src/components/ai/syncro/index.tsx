import TextMessage from '@/components/message_interface'
import Forwardtext from '@/components/message_interface/forwardtext'
import Question from '@/components/message_interface/question'
import { content } from '@/services/chat/chat_show.service'
import { revalidatePath } from 'next/cache'
import React from 'react'

async function data() {
  const chat = await content()
  revalidatePath('/syncro')
  return chat
}
const LLema = async () => {
  // await deletes()
  const contents = await data()
  // console.log(contents.map(content => ))
  return (
    <div className='flex gap-y-6 flex-col'>
      {/* {contents.map(content =>  => (
        <TextMessage forward={}/>
      ))} */}
    </div>
  )
}

export default LLema
