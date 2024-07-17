'use client'
import React from 'react'
import { Input } from '../ui/input'

interface Search {
  onChange: () => void
  value: string
}

const Search = () => {
  return (
    <div className=' border  flex gap-x-1 items-center px-2 rounded-full antialiased relative backdrop-blur-3xl'>
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent " />
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-slate-600 pl-2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
      <Input className=' border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[12px]' placeholder=' search notes' />
    </div>
  )
}

export default Search
