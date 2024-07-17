import React from 'react'
import Search from './search'
import Create_notes_Button from './button_create'


function Header() {
  return (
    <div className=' flex items-center  fixed w-[90%] backdrop-blur-sm justify-between  z-20'>
      <Search />
      <div><Create_notes_Button /></div>
    </div>
  )
}

export default Header
