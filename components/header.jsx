import React from 'react'
import { LogoSC } from './logo'

export const Header = ({right}) => {
  return (
    <div className=' bg-white w-full h-20 mb-5 px-5 md:px-12 flex justify-between items-center shadow-md font-semibold'>
        <div className='relative w-36 h-12 md:w-56 md:h-[4.5rem]'>  
          <LogoSC/>
        </div> 
        <div className='flex'>
            {right}
        </div>
    </div>
  )
}
