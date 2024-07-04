'use client'
import React from 'react'
import { Search } from '../search/search'
import UserAvatar from './user/topbar'

const Navbar = () => {
  return (
    <div className=' w-full h-full border rounded-lg flex items-center justify-end pr-6 gap-x-6'>
      <Search />
      <UserAvatar />
    </div>
  )
}

export default Navbar
