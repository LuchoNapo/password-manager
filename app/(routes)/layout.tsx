"use client"
import { Logo } from '@/components/Shared/Logo/Logo'
import Sidebar from '@/components/Shared/Sidebar/Sidebar'
import SidebarMobile from '@/components/Shared/SidebarMobile/SidebarMobile'
import React from 'react'

export default function LayoutRoutes({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='h-full select-none'>
            <div className='flex justify-between lg:hidden px-5 py-3 items-center bg-gray-900 '>
                <div className='py-1 text-white'>
                    <Logo />
                </div>
                <SidebarMobile />
            </div>
            <div className="max-w-lg hidden lg:flex h-full w-72 flex-col fixed bg-gray-900 px-4 text-white">
                <Sidebar />
            </div>
            <div className='w-full lg:pl-72'>
                <div className='p-6'>{children}</div>
            </div>
        </main>
    )
}
