'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Create_notes_Button = () => {
  const router = useRouter()
  return (
    <Button
      className=' flex gap-x-2 justify-between rounded-3xl items-center h-10'
      onClick={() => router.push('/nootbook/create')}>
      <p className=' text-[12px]'>Create</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
    </Button>
  )
}

export default Create_notes_Button
