'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const InputChat = () => {
  const formSchema = z.object({
    message: z.string()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: ''
    }
  })
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }
  return (
    <div className=''>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className=' flex gap-x-3'
        >
          <FormField
            name='message'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea {...field} className=' h-[30px] w-[600px] rounded-full' />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' variant={null}>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default InputChat
