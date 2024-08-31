import React from 'react'
import InputChat from './input'
import Forwardtext from '../_chat/forwardtext'
import Question from '../_chat/question'

const Main = () => {
  return (
    <div className=' w-full h-[90%]  relative'>
      <div className=' h-full w-full p-4'>
        <Forwardtext
          imageShown={true}
          message='tfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjk' />
        <Question
          message='tfcgyuhyjuihjjnqqqqqqqqqqqqqqqqqqqqsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' />
      </div>
      <div className=' w-full '>
        <InputChat />
      </div>
    </div>
  )
}

export default Main
