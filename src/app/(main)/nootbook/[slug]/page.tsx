import React from 'react'
import { getNotes } from '@/services/nootbook.service'
import Slug from '@/components/tiptap/slug'

interface Slug {
  params: {
    slug: string
  }
}
const Page = async ({ params }: Slug) => {
  console.log(params)
  const content = await getNotes(params.slug)
  console.log(!content.success)
  if (!content.success) {
    return <div>
      <p>NotFound</p>
    </div>
  }
  return (
    <div>
      <Slug content={content} />
    </div>
  )
}

export default Page
