import { content } from '@/services/chat_show.service'
import { revalidatePath } from 'next/cache'
import React from 'react'

async function data() {
  const chat = await content()
  revalidatePath('/syncro')
  return chat
}
const LLema = async () => {
  // await deletes()
  await data()
  return (
    <div className='flex gap-y-6 flex-col'>
      {/* <Question /> */}
    </div>
  )
}

export default LLema
