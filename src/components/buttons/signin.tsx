'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

import { Icons } from '../icons'
import Image from 'next/image'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { SigninAction } from '@/actions/chat'

const Signin = ({ name, className }: { name: string, className: ClassNameValue }) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <form
      action={
        async () => {
          // setIsLoading(true)
          await SigninAction()
          // setIsLoading(false)
        }}
      className=' w-full'
    >
      <Button type="submit" className={cn("flex ", className)} variant={"outline"} disabled={isLoading}>
        <Image src={Icons.Github.dark} alt='' width={20} height={20} />
        {name}
      </Button>
    </form>
  )
}

export default Signin
