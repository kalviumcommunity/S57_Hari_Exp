import Spinner from '@/components/ui/spinner'
import React from 'react'

const loading = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center'>
      <Spinner
        childSize="h-6 w-6"
        className="bg-gradient-to-bl dark:from-black from-transparent to-blue-400"
        outerSize="h-8 w-8"
      />
    </div>

  )
}

export default loading

