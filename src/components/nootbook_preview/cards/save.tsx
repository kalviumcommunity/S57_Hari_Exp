'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Form, FormControl, FormField, FormItem } from '../../ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { llema } from '@/services/notes/copynotes.service'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils'
const Save = () => {
  const { toast } = useToast()
  const [saving, setSaving] = useState(Boolean)
  const formSchema = z.object({
    tag: z.string()
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tag: ''
    }
  })
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setSaving(true)
    const res = await llema(data.tag)
    if (res?.llemaa) {
      toast({
        title: res.llemaa,
      })
    }
    if (res?.llema) {
      toast({
        title: res.llema,
        description: ''
      })
    }
    if (res?.invalid) {
      toast({
        title: res.invalid,
      })
    }
    if (res?.success) {
      toast({
        title: 'downloaded successfully',
      })
    }
    setSaving(false)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className=' rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-down"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M12 10v6" /><path d="m15 13-3 3-3-3" /></svg></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className=" flex gap-y-4">
            <DialogDescription className=" text-[12px] pt-4">
              Copy the tag from clipboard and paste it on the import notes
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-y-6'>
              <FormField
                name='tag'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={saving}>{saving ?
                <Loader2 className={cn(saving && "animate-spin w-4 h-4")} /> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>}</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Save
