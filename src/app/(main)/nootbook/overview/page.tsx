import dynamic from 'next/dynamic'
import React from 'react'

const DynamicCreateButton = dynamic(() => import('@/components/nootbook/create'))

const Overview = () => {
  return (
    <div className=' w-full h-full'>
      <div>
        <DynamicCreateButton />
      </div>
    </div>
  )
}

export default Overview
