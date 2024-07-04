import dynamic from 'next/dynamic'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const DynamicCreateButton = dynamic(() => import('@/components/nootbook/create'))

const Overview = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className=' w-full h-full'>
      <div>
        <DynamicCreateButton />
      </div>
    </div>
  )
}

export default Overview
