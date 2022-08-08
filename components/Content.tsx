import React from 'react'
import Carousel from './Carousel'

export default function Content() {
  return (
    <div>
      <div className=' w-full h-full  bg-slate-900'>
        <div className=' bg-slate-400 w-full h-32  mt-44'></div>
        <div className='flex flex-row w-11/12 h-full ml-14'>
          <div className=' h-96 w-1/4 bg-red-400'></div>
          <div className=' h-96 w-3/4 bg-emerald-300'></div>
        </div>
      </div>
    </div>
  )
}
