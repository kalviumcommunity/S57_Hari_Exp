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
import { delete_note } from '@/services/notes/delete_notes.service'

interface DeleteInterface {
  noteId: string
}
const Delete = ({ noteId }: DeleteInterface) => {
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
    const delte = await delete_note(noteId)
    let error = ""
    if (delte.message === (error = "You do not have permission to delete")) {
      toast({
        title: error
      })
    }
    else if (delte.message === (error = "Try again")) {
      toast({
        title: error
      })
    }
    else if (delte.message === (error = "deleted successfully")) {
      toast({
        title: error
      })
    }
    setSaving(false)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={null} className=' z-40 '><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className=" flex gap-y-4">
            <DialogDescription className=" text-[12px] pt-4">
              Are you sure you want to delete the note? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-y-6'>
              <Button type="submit" disabled={saving} variant={"secondary"}>{saving ? <Loader2 className={cn(saving && "animate-spin w-4 h-4")} /> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>}</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Delete
