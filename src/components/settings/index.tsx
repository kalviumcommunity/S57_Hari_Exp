'use client'
import React from 'react'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Switch } from '../ui/switch'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Index = () => {
  const formSchema = z.object({
    noteSharing: z.boolean()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      noteSharing: false
    }
  })
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }
  return (
    <div className=' w-full h-full'>
      <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name='noteSharing'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Switch {...field} checked={field.value} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default Index
