import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center flex wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
        <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38}/>
        </Link>
        <p>Made by Rutuparn kakade</p>
      </div>
    </footer>
  )
}

export default Footer