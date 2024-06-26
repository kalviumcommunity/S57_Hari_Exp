'use client'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { Home, MessageCircle, Settings, Bot, Notebook } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import logo from '../../../public/vercel.svg'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const pathname = usePathname()
  const isActive = useCallback((link: string) => {
    return pathname.startsWith(`/${link}`)
  }, [pathname])
  // console.log(pathname.startsWith('/home'))
  const router = useRouter()
  const icon = [
    {
      logo: Home,
      link: 'home'
    },
    {
      logo: MessageCircle,
      link: 'chats'
    },
    {
      logo: Bot,
      link: 'syncro'
    },
    {
      logo: Notebook,
      link: 'nootbook'
    },
    {
      logo: Settings,
      link: 'settings'
    },
  ]
  return (
    <div className=' h-full w-full flex items-center p-4 flex-col gap-y-8'>
      <Image src={logo} alt='' />
      <div className=' flex flex-col gap-y-2 pt-6'>
        {icon.map(data => (
          <Button onClick={() => router.push(data.link)} className={cn('border rounded-xl h-12', isActive(data.link) ? 'bg-slate-100' : '')} variant={"outline"}>
            <data.logo width={20} strokeWidth={'1.3'} />
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
