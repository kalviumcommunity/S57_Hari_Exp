import React from 'react'
import Question from './question'
import Forwardtext from './forwardtext'

interface TextMessageInterface {
  forward: string,
  question: string
}
const TextMessage = ({ forward, question }: TextMessageInterface) => {
  return (
    <>
      <Question message={question} />
      <Forwardtext message={forward} />
    </>
  )
}

export default TextMessage
