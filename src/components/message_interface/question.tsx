import React from 'react'

interface ChatInterface {
  message: string
}

const Question = ({ message }: ChatInterface) => {
  return (
    <>
      <div className=' flex flex-row-reverse'>
        <div className=' bg-slate-100 w-[600px] p-4 rounded-l-2xl rounded-b-2xl text-[13px]'>
          {message}
        </div>
      </div >
    </>

  )
}

export default Question
