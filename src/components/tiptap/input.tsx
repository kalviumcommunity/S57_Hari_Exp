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

const AiEditor = () => {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className=' h-1/2'>
        <DrawerHeader>
          <DrawerTitle>Generate your content with your personal ai</DrawerTitle>
          <DrawerDescription>Ex/ create an shedule to listen out to my podcast</DrawerDescription>
          <form>
            <Textarea />
          </form>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default AiEditor
