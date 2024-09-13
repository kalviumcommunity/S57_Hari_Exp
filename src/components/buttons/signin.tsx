import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import Image from 'next/image'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { SigninGithubAction, SigninGoogleAction } from '@/services/auth/auth.service'
import Google from '../../../public/google.svg'

const Signin = ({ name, className }: { name: string, className: ClassNameValue }) => {
  return (
    <div className=' flex flex-col gap-y-4 w-full'>
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
          <Image src={Google} alt='' width={20} height={20} />
          Google
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
          Github
        </Button>
      </form>
    </div>
  )
}

export default Signin
