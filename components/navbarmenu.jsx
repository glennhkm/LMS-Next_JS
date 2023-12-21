import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ButtonPrimary, ButtonSecondary } from './button'
import { MobileMenu } from './mobilemenu'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs"

export const DekstopMenu = () => {

    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname.startsWith('/teacher');
    const isPlayerPage = pathname.includes('/chapter');

    return (
      <ul className='flex gap-5 sm:gap-12 items-center'>
          <li className={`hover:text-gold-0 hidden sm:flex hover:scale-110 duration-300 ${pathname === '/dashboard' ? 'text-gold-0' : ''}`}>
            <Link href="/dashboard"> Dashboard </Link>
          </li>
          <li className={`hover:text-gold-0 hidden sm:flex hover:scale-110 duration-300 ${pathname === '/browse' ? 'text-gold-0' : ''}`}>
            <Link href="/browse"> Browse </Link>
          </li>
          {isTeacherPage || isPlayerPage ? 
            (
              <li>
                <ButtonPrimary href=''>
                  <LogOut/>
                  Exit
                </ButtonPrimary>
              </li>
            ) : 
            (
              <li>
                <ButtonSecondary href="">
                  Teacher Mode
                </ButtonSecondary>
              </li>
            )
          }
          <li>
            <UserButton afterSignOutUrl='/'/>
          </li>
          <li className='flex sm:hidden'>
            <MobileMenu/>
          </li>
      </ul>
    )
}
