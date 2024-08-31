import React, { Suspense, useState } from 'react'
import Header from './header'
import { notes } from '@/services/notes.service'
// import { prisma } from '../../../prisma/prisma'
import Image from 'next/image'
import notFound from '../../../public/undraw_notebook_re_id0r.svg'
import scribble from '../../../public/scribble-svgrepo-com.svg'
import Card from './cards/card'
import { Skeleton } from '../ui/skeleton'


async function llema(query?: string) {
  const content = await notes()
  const boolean = content?.some(note => note.notes.length > 0)
  console.log(boolean)
  const data = content?.map(content => content.notes.map(note => note))
  console.log(data)
  return {
    render: boolean,
    content: data
  }
}

// async function deletes() {
//   const notes = await prisma.note.deleteMany();
//   console.log(notes);
// }


const Index = async () => {
  // const [search, setSearch] = useState(String)
  const notes = await llema()
  // const handleSearch = (query: string) => { }
  // deletes();
  return (
    <div className=' w-full h-full p-4 overflow-y-auto'>
      <Header />
      {/* top bar search notes videos photos createNotes */}
      {/* thumbnail with sharing */}
      <div className={`min-h-fit mt-[4rem] ${notes.render && "grid grid-cols-4 gap-y-4"}  w-full h-[80%]`}>
        {
          notes.render ? (
            notes.content?.map(note => (
              note.map(n => (
                <Card date={n.createdAt} heading={n.tag} paragraph={n.notes.replaceAll(/<[^>]*\/?>/g, ' ')} noteId={n.id} key={n.tag} />

              ))
            ))
          ) : (
            <div className=' w-full h-full flex justify-center items-center  flex-col gap-y-6 '>
              <Image src={notFound} alt='' className=' w-[40%] h-[40%]' />
              <div className=' flex'>
                <Image src={scribble} alt='' className=' w-6 h-6' />
                <p className=' text-[12px]'>Create some notes to make your workload easier</p>
              </div>

            </div>
          )
        }

      </div>
    </div >
  )
}

export default Index
