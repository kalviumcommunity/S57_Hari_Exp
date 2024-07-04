import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'

const CreateNootbook = () => {
  const router = useRouter()
  return (
    <div>
      <Button className='' onClick={() => router.push(`/nootbook/create`)}>
        Create Notebook
      </Button>
    </div>
  )
}

export default CreateNootbook
