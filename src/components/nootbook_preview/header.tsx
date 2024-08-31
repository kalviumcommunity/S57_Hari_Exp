'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Search from './search'
import Save from './cards/save'
import Create_notes_Button from './button_create'


interface HeaderInterface {
  sender?: Function
}

function Header({ sender }: HeaderInterface) {

  const [search, setSearch] = useState(String)

  const handleSearch = (query: string) => {
    setSearch(query)
  }

  useEffect(() => {
    console.log(search)
    // sender(search)
  }, [search])
  return (
    <div className=' flex items-center  fixed w-[90%] backdrop-blur-sm justify-between  z-20'>
      <Search onChange={handleSearch} value={search} />
      <div className=' flex gap-x-6'>
        <Save />
        <div><Create_notes_Button /></div>
      </div>
    </div>
  )
}

export default Header
