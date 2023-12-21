import React from 'react'
import Image from 'next/image'

export const LogoSC = () => {
  return (
    <Image 
        fill
        src={'/image/logo_sc.png'}
        loading='lazy'
        alt="LogoSC"
    />
  )
}


