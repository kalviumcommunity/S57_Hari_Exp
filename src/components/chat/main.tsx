import React from 'react'
import InputChat from './input'
import Forwardtext from '../_chat/forwardtext'
import Question from '../_chat/question'

const Main = () => {
  return (
    <div className=' w-full h-[90%] bg-lime-400  relative'>
      <div className=' h-[80%] overflow-y-scroll  p-4'>
        <Forwardtext
          imageShown={true}
          message='tfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjk' />
        <Question
          image=''
          message='tfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjktfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjktfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjk' />
      </div>
      <div className=' fixed w-full '>
        <InputChat />
      </div>
    </div>
  )
}

export default Main
