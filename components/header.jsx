import React from 'react'
import Image from 'next/image'

export const Header = ({right}) => {
  return (
    <div className=' bg-white w-full h-20 mb-5 px-5 md:px-12 flex items-center justify-between shadow-md font-semibold tracking-wide  '>
        <div>  
        <Image 
            src={'/image/logo_sc.png'}
            alt="LogoSC"
            width={200}
            height={200}
        />
        </div> 
        <div className='flex'>
            {right}
        </div>
    </div>
  )
}
