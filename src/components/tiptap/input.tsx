import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Form, FormField, FormItem } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { aiEditor } from '@/services/editor.service'

const AiEditor = () => {
  const text = z.object({
    content: z.string().max(200),
  })
  const form = useForm<z.infer<typeof text>>({
    resolver: zodResolver(text),
    defaultValues: {
      content: ""
    }
  })
  async function onSubmit(data: z.infer<typeof text>) {
    console.log(data.content)
    const { data: llema } = aiEditor(data.content)
    console.log(llema)
  }
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className=' h-1/2'>
        <DrawerHeader>
          <DrawerTitle>Generate your content with your personal ai</DrawerTitle>
          <DrawerDescription>Ex/ create an shedule to listen out to my podcast</DrawerDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="content"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Textarea {...field} />
                  </FormItem>
                )}
              />
              <Button type='submit'>
                Submit
              </Button>
            </form>
          </Form>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AiEditor
