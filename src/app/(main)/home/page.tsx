import Index from '@/components/preview'
import { users } from '@/services/auth.service'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Syncro | Preview",
  description: ""
}

// export const runtime = "edge"
const Home = () => {
  return (

    <div className=' w-full h-full'>
      <Index />
    </div >

  )
}

export default Home
