'use client'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { Home, MessageCircle, Settings, Bot, Notebook } from 'lucide-react'
import { Button } from '../../../ui/button'
import Image from 'next/image'
import logo from '../../../../../public/vercel.svg'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import Buttons from './buttons'

const Sidebar = () => {

  // console.log(pathname.startsWith('/home'))
  const icon = [
    {
      logo: <Home width={20} strokeWidth={'1.3'} />,
      link: '/home'
    },
    {
      logo: <MessageCircle width={20} strokeWidth={'1.3'} />,
      link: '/chats'
    },
    {
      logo: <Bot width={20} strokeWidth={'1.3'} />,
      link: '/syncro'
    },
    {
      logo: <Notebook width={20} strokeWidth={'1.3'} />,
      link: '/nootbook'
    },
    {
      logo: <Settings width={20} strokeWidth={'1.3'} />,
      link: '/settings'
    },
  ]
  return (
    <div className=' h-full w-full flex items-center p-4 flex-col gap-y-8'>
      <Image src={logo} alt='' />
      <div className=' flex flex-col gap-y-2 pt-6'>
        {icon.map((data, i) => (
          <Buttons link={data.link} logo={data.logo} key={i}>

          </Buttons>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
