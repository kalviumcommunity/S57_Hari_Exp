import Notebook from '@/app/(main)/nootbook/layout'
import Settings from '@/app/(main)/settings/page'
import Home from '@/app/page'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

interface Button {
  link: string
  logo: React.ReactNode
}
const Buttons = ({ link, logo }: Button) => {
  const pathname = usePathname()
  const isActive = useCallback((link: string) => {
    return pathname.startsWith(`${link}`)
  }, [pathname])
  const router = useRouter()
  return (
    <Button onClick={() => router.push(link)} className={cn('border rounded-xl h-12', isActive(link) ? 'bg-slate-100' : '')} variant={"outline"}>
      {logo}
    </Button>
  )
}

export default Buttons
