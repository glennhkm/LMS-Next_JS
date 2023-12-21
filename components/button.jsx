import React from 'react'
import Link from 'next/link'

export const ButtonPrimary = ({children, href}) => {
  return (
    <div>
        <Link href={href}>
            <button className='bg-gold-0 font-medium hover:text-black text-sm md:text-base hover:scale-110 text-white py-[0.35rem] px-4 rounded-md duration-300'>
                {children}
            </button>
        </Link>
    </div>
  )
}

export const ButtonSecondary = ({children, href}) => {
  return (
    <div>
        <Link href={href}>
            <button className='bg-gold-0 font-light sm:font-normal hover:text-black text-xs md:text-sm hover:scale-105 px-3 text-white py-[0.3rem] rounded-md duration-300'>
                {children}
            </button>
        </Link>
    </div>
  )
}
