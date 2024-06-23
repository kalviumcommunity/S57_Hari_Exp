import React from 'react'
import { Button } from '../ui/button'
import { signIn } from '@/lib/auth'
import { Icons } from '../icons'
import Image from 'next/image'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'

const Signin = ({ name, className }: { name: string, className: ClassNameValue }) => {
  return (
    <form
      action={
        async () => {
          "use server"
          await signIn("github")
        }}
      className=' w-full'
    >
      <Button type="submit" className={cn("flex ", className)} variant={"outline"}>
        <Image src={Icons.Github.dark} alt='' width={20} height={20} />
        {name}
      </Button>
    </form>
  )
}

export default Signin
