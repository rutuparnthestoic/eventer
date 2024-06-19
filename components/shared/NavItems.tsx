'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathName = usePathname();

  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {headerLinks.map((item) => {
            const isActive = item.route === pathName;

            return (
                <li className={`${isActive && 'text-primary-500 text-bold'} flex-center p-medium-16 whitespace-nowrap`}>
                    <Link href={item.route}>{item.label}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems