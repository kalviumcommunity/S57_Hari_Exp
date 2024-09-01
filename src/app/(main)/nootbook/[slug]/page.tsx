import React from 'react'
import { getNotes } from '@/services/nootbook.service'
import Slug from '@/components/tiptap/preview/slug'

// export const runtime = 'edge'

interface Slug {
  params: {
    slug: string
  }
}

const Page = async ({ params }: Slug) => {
  console.log(params.slug)
  const content = await getNotes(params.slug)
  console.log(content.success?.notes)
  console.log(content.success?.id)
  if (!content.success) {
    return <div>
      <p>NotFound</p>
    </div>
  }
  return (
    <Slug content={content.success.notes} noteId={content.success.id} />
  )
}

export default Page
