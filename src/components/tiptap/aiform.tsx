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
import { useTagContext } from '@/context/chat'

const Aiform = () => {
  const [isLoading, setLoading] = useState(false)
  const context = useTagContext()
  const contentSchema = z.object({
    content: z.string().max(60)
  })
  const form = useForm<z.infer<typeof contentSchema>>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      content: ""
    }
  })
  async function onSubmit(data: z.infer<typeof contentSchema>) {
    setLoading(true)
    const response = await aiEditor(data.content)
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
                <Textarea {...field} className=' h-60' />
              </FormItem>
            )}
          />
          <Button type='submit'>{isLoading ? <Loader className=" animate-spin w-6 h-6" /> : 'Generator'}</Button>
        </form>
      </Form>
    </div>
  )
}

export default Aiform
