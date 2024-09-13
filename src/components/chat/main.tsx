import React from 'react'
import InputChat from './input'
import Forwardtext from '../message_interface/forwardtext'
import Question from '../message_interface/question'

const Main = () => {
  return (
    <div className=' w-full h-[90%]  relative'>
      <div className=' h-full w-full p-4'>
        <Forwardtext
          message='tfcgyuhyjuihjjnnhhbhcbvhjxcvjxcvjxcvjxcvnjkxcvnxjkcvnxjkcvnxjkvnjk' />
        <Question
          message='tfcgyuhyjuihjjnqqqqqqqqqqqqqqq
          qqqqqsddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddd' />
      </div>
      <div className=' w-full  fixed top-[90%]'>
        <InputChat />
      </div>
    </div>
  )
}

export default Main
