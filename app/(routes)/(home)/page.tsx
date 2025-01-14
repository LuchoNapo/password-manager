import React from 'react'
import OptionCard from './components/OptionCard/OptionCard'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { Options } from './components/OptionCard/OptionCard.data'

export default async function page() {

    const session = await getServerSession()

    if (!session?.user?.email) {
        return redirect("/auth/signin")
    }
    const userDb = await db.user.findUnique({
        where: {
            email: session.user.email
        }
    })
    if (!userDb) {
        return redirect("/auth/signin")
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

    return (
        <div className='flex flex-col gap-4 items-center justify-center p-6 md:pt-6 md:h-screen pt-20'>
            <div className=''>{capitalize(formattedDate)}</div>
            <h1 className='text-3xl md:text-6xl font-semibold'>¡Bienvenido {userDb.name}!</h1>
            <h2 className='text-xl md:text-2xl dark:text-white/50 text-black/50'>¿Que deseas ver hoy?</h2>
            <div className='grid grid-cols-2 gap-4'>
                <OptionCard options={Options} />
            </div>
        </div>
    )
}
