import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Profile = () => {
  return (
    <div className=' flex items-center gap-x-4'>
      <Avatar>
        <AvatarImage src='https://lh3.googleusercontent.com/a/ACg8ocLmuFR1rOBIN8qLAETFp9aRzuy-6z0T_FjBhYF--K-omdWR1E0=s96-c' alt='' />
        <AvatarFallback>

        </AvatarFallback>
      </Avatar>
      <p>Mark</p>
    </div>
  )
}

export default Profile
