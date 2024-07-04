import React from 'react'

interface Slug {
  params: {
    slug: string
  }
}
const Page = ({ params }: Slug) => {
  console.log(params)
  return (
    <div>
      <p>{params.slug}</p>
    </div>
  )
}

export default Page
