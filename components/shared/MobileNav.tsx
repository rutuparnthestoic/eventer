import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'


const MobileNav = () => {
  return (
    <nav className='md:hidden'>
    <Sheet>
        <SheetTrigger asChild className='align-middle'>
            <Image alt='menu' src='/assets/icons/menu.svg' width={24} height={24} />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
            <Image src='/assets/images/logo.svg' alt='logo' width={128} height={38}/>
        <Separator />
            <NavItems />
        </SheetContent>
    </Sheet>

    </nav>
  )
}

export default MobileNav