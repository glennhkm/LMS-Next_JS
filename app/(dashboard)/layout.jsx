"use client"

import React from 'react'
import { Header } from '../../components/header'
import { DekstopMenu } from '../../components/navbarmenu'
import { UserButton } from "@clerk/nextjs"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileMenu } from '../../components/mobilemenu'
import { ButtonSecondary } from '../../components/button'
import { LogOut } from 'lucide-react'


const DashboardLayout = ({children}) => {
  return (
    <main>     
        <div className='mb-7 sticky top-0'>
            <Header 
              right={
                <DekstopMenu/>
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