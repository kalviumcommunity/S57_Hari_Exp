'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import type { Editor } from '@tiptap/react'
import { Loader } from 'lucide-react'
import { save } from '@/services/save.service'
import { tag } from '@/validation'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useTagContext } from '@/context/chat'


const Save = ({ editor }: { editor: Editor }) => {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  async function handleSave() {
    setLoading(true)
    try {

      const saves = editor?.getHTML()
      console.log(saves)
      const tags = tag(
        saves
      )
      const insert = await save(saves, tags)
      if (insert?.success) {
        router.push(`/nootbook/${tags}`)
      }
      if (insert?.error) {
        return toast({
          title: insert.error,
          description: insert.reason,
          duration: 4000,
        })
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <Button onClick={() => handleSave()} className=' text-[12px] h-8' disabled={isLoading || editor?.isEmpty}>{isLoading ? <Loader className=" w-4 h-4 animate-spin" /> : <p>Save</p>}</Button>
  )
}

export default Save
