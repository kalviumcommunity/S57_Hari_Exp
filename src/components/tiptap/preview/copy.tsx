import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Clipboard({ noteId }: { noteId: string }) {
  const [copy, setCopy] = useState(Boolean)

  const copyfunction = async () => {
    setCopy(true)
    await navigator.clipboard.writeText(noteId)
    setTimeout(() => setCopy(false), 2000)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className=" flex gap-y-4">
          <DialogTitle>Share</DialogTitle>
          <DialogDescription className=" text-[12px]">
            Copy the tag from clipboard and paste it on the import notes
          </DialogDescription>
        </DialogHeader>
        <Input className="" disabled value={noteId} />
        <Button type="submit" disabled={copy} onClick={() => copyfunction()}>{copy ? 'copying' : 'copy'}</Button>
      </DialogContent>
    </Dialog>
  )
}
