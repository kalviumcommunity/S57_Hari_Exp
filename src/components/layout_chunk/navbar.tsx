'use client'
import React from 'react'
import UserAvatar from './user/avatar'
import { auth } from '@/lib/auth'
import { useSession } from 'next-auth/react'
import { Input } from '../ui/input'
import { Search } from '../search/search'

const Navbar = () => {
  const session = useSession()
  return (
    <div className=' w-full h-full border rounded-lg flex items-center justify-end pr-6 gap-x-6'>
      <Search />
      <UserAvatar session={session.data} />
    </div>
  )
}

export default Navbar
