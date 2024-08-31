import React, { Suspense, useContext } from 'react'
import PreivewHeader from './header'
import PreviewBox from './box'
import TodayNotes from './today_notes'

const Index = () => {
  return (
    <div className=' w-full h-full rounded-lg p-4 flex flex-col gap-y-4'>
      <PreivewHeader />
      <div className=' w-full h-fit gap-x-4'>
        <PreviewBox children={
          <div className=' p-4 w-full h-full'>
            {/* <p className=' font-bold'>Notes</p> */}
            <TodayNotes />
          </div>
        } />
      </div>
    </div>
  )
}

export default Index
