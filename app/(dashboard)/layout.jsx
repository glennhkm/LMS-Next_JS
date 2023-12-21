"use client";
import React from 'react'
import { Header } from '../../components/header';
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const DashboardLayout = ({children}) => {
  const pathname = usePathname();
  return (
    <main>     
        <div className='mb-7 sticky top-0'>
            <Header 
              right={
                <ul className='flex gap-12 items-center'>
                  <li className={`hover:text-[#D39F36] hover:scale-110 duration-300 ${pathname === '/dashboard' ? 'text-[#D39F36]' : ''}`}>
                    <Link href="/dashboard"> Dashboard </Link>
                  </li>
                  <li className={`hover:text-[#D39F36] hover:scale-110 duration-300 ${pathname === '/browse' ? 'text-[#D39F36]' : ''}`}>
                    <Link href="/browse"> Browse </Link>
                  </li>
                  <li>
                    <UserButton afterSignOutUrl='/'/>
                  </li>
                </ul>
              }  
              />
        </div>
        <div>
            {children}
        </div>
    </main>
  )
}

export default DashboardLayout