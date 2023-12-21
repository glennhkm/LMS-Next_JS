import React from 'react'
import { SignInButton } from "@clerk/nextjs"
import { Header } from '../components/header'
import { ButtonPrimary } from '../components/button'

const Home = () => {
  return (
    <main className='w-full'>
      <div className='sticky top-0'>
        <Header 
          right = {
            <ButtonPrimary href="">
              <SignInButton>
                SIGN IN
              </SignInButton>
            </ButtonPrimary>
          }  
        />
      </div>
      <div className=' font-normal text-xl text-center px-12'>
        Ini Halaman Home
      </div>
    </main>
  )
}

export default Home
