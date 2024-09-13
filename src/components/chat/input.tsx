'use client'
import React, { useRef } from 'react'
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
  const input_ref = useRef(null)
  return (
    <div className=' w-full '>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className=' w-full flex gap-x-4 justify-center items-center'
        >
          <FormField
            name='message'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea  {...field} className=' h-[60px] w-[600px] rounded-full border p-4' onKeyDown={(e) => {
                    e.preventDefault()
                    form.handleSubmit(onSubmit)
                  }} />
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
