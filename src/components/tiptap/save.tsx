'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import type { Editor } from '@tiptap/react'
import { Loader } from 'lucide-react'
import { save } from '@/services/save.service'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { Title } from '@/services/tag_generator.service'
import { tags, title } from '@/lib/prompt'
import { genTags } from '@/services/tags.service'


const tagss = async (save: string) => {
  const tagss = JSON.stringify(save + tags)
  const tagsss = await genTags(tagss)
  console.log(tagsss)
  return tagsss
}

const titles = async (saves: string) => {
  const content = JSON.stringify(saves + title)
  const llema = (await Title(content)).replace(/\n/g, '').replace(/ /g, '_')
  console.log(llema)
  return llema
}

const Save = ({ editor }: { editor: Editor }) => {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  async function handleSave() {
    setLoading(true)
    try {

      const saves = editor?.getHTML()
      console.log(saves)

      const llema = await titles(saves)
      const tagsss = await tagss(saves)
      console.log(llema, tagsss)

      const insert = await save(saves, llema, tagsss)
      console.log(insert?.success)
      if (insert?.success) {
        router.push(`/nootbook/${llema}`)
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
