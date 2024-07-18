import React from 'react'
import Search from './search'
import Create_notes_Button from './button_create'
import Save from './cards/save'


function Header() {
  return (
    <div className=' flex items-center  fixed w-[90%] backdrop-blur-sm justify-between  z-20'>
      <Search />
      <div className=' flex gap-x-6'>
        <Save />
        <div><Create_notes_Button /></div>
      </div>
    </div>
  )
}

export default Header
