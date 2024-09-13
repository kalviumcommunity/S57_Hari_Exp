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
      <DialogTrigger asChild className="">
        <Button variant={null}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward"><polyline points="15 17 20 12 15 7" /><path d="M4 18v-2a4 4 0 0 1 4-4h12" /></svg></Button>
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
