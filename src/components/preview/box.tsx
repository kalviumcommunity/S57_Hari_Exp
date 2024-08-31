import React from 'react'

const PreviewBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full h-full border rounded-lg'>
      {children}
    </div>
  )
}

export default PreviewBox
