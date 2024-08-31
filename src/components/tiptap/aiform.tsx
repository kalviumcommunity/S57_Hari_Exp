"use client"
import React, { useState } from 'react'
import { Form, FormField, FormItem } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { aiEditor } from '@/services/editor.service'
import { Loader } from 'lucide-react'
import { prompt } from '@/lib/prompt'

interface AiformInterface {
  pass: (data: string) => void
  disable?: boolean
}
const Aiform = ({ pass, disable }: AiformInterface) => {
  const [isLoading, setLoading] = useState(false)
  const contentSchema = z.object({
    content: z.string().min(2)
  })
  const form = useForm<z.infer<typeof contentSchema>>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      content: ""
    }
  })
  async function onSubmit(data: z.infer<typeof contentSchema>) {
    setLoading(true)
    const res = JSON.stringify(data.content + prompt)
    const response = await aiEditor(res)
    pass(response?.data)
    console.log(response?.data)
    setLoading(false)
  }
  return (
    <div className=' py-6 flex flex-col gap-y-4 max-lg:hidden'>
      <p className=' text-[12px] font-semibold'>Gnerate your content with<span className=' font-semibold'> AI</span> </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-y-6'>
          <FormField
            name='content'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Textarea {...field} className=' h-40' />
              </FormItem>
            )}
          />
          <Button type='submit' disabled={disable && disable}>{isLoading ? <Loader className=" animate-spin w-4 h-4" /> : 'Generator'}</Button>
        </form>
      </Form>
    </div>
  )
}

export default Aiform
