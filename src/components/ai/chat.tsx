'use client'
import React, { useState } from 'react'
import { Form, FormField, FormItem } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formSchema } from '@/validation'
import { sendChat } from '@/services/chat.service'
import { Loader } from 'lucide-react'


const ChatInput = () => {
  const { userMessageAction } = useChat();
  const [isLoading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chat: ""
    }
  })
  async function onsubmit(data: z.infer<typeof formSchema>) {
    userMessageAction(data.chat)
    setLoading(true)
    const parses = formSchema.parse(data)
    if (!parses) return
    const chat = await sendChat(data.chat)
    setLoading(false)
  }
  return (
    <Form {...form}>
      <form className=' flex w-[80%] justify-center gap-x-1 items-center p-6  fixed bg-transparent' onSubmit={form.handleSubmit(onsubmit)}
      >
        <FormField
          name='chat'
          control={form.control}
          render={({ field }) => (
            <FormItem className=' w-full'>
              <Textarea className=' resize-none  flex-1' {...field} />
            </FormItem>
          )}
        >
        </FormField>
        <Button
          disabled={isLoading}
          variant={null}
          type='submit'>
          {isLoading ? <Loader className=" animate-spin" /> : "Submit"}
        </Button>
      </form>

    </Form>
  )
}

export default ChatInput
