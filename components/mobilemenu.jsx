"use client"

import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../@/components/ui/sheet'
import { Menu, Layout, Compass } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <main className='relative'>
        <Sheet>
            <SheetTrigger className='hover:opacity-50 transition' >
                <Menu/>
            </SheetTrigger> 
            <SheetContent className='w-1/3 rounded-md ml-auto bg-white shadow-md absolute top-16 right-1 py-5 sm:hidden h-auto'>
              <ul className='flex flex-col sm:gap-12 px-3 text-black line-clamp-2 divide-y-2'>
                  <li className={`flex gap-2 active:text-gold-0 pb-4 items-center text-sm duration-200 ${pathname === '/dashboard' ? 'text-gold-0' : ''}`}>
                    <Layout height={20} width={20}/>  
                    <Link href="/dashboard"> Dashboard </Link>
                  </li>
                  <li className={`flex gap-2 active:text-gold-0 pt-4 items-center text-sm duration-200 ${pathname === '/browse' ? 'text-gold-0' : ''}`}>
                    <Compass height={20} width={20}/>
                    <Link href="/browse"> Browse </Link>
                  </li>
              </ul>
            </SheetContent>
        </Sheet>
    </main>
  )
}
