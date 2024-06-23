import Link from 'next/link'
import React from 'react'
import { Home } from 'lucide-react'

const Sidebar = () => {
  return (
    <div>
      <Link href={''} className=' w-[60%] border'>
        <Home />
      </Link>
    </div>
  )
}

export default Sidebar
