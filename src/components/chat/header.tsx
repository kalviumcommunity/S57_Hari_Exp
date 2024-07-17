import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Profile from './avatar'

const Header = () => {
  return (
    <div className=' w-full h-[10%] items-center flex pl-4'>
      <Profile />
    </div>
  )
}

export default Header
