import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import Image from 'next/image'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { SigninGithubAction, SigninGoogleAction } from '@/services/auth.service'

const Signin = ({ name, className }: { name: string, className: ClassNameValue }) => {
  return (
    <>
      <form
        action={
          async () => {
            "use server"
            // setIsLoading(true)
            await SigninGoogleAction()
            // setIsLoading(false)
          }}
        className=' w-full'
      >
        <Button type="submit" className={cn("flex ", className)} variant={"outline"}>
          <Image src={Icons.Github.dark} alt='' width={20} height={20} />
          {name}
        </Button>
      </form>
      <form
        action={
          async () => {
            "use server"
            // setIsLoading(true)
            await SigninGithubAction()
            // setIsLoading(false)
          }}
        className=' w-full'
      >
        <Button type="submit" className={cn("flex ", className)} variant={"outline"}>
          <Image src={Icons.Github.dark} alt='' width={20} height={20} />
          {name}
        </Button>
      </form>
    </>
  )
}

export default Signin
