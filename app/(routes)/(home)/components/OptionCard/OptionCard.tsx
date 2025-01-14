import React from 'react'
import { OptionCardProps } from './OptionCards.type'

export default function OptionCard(props: OptionCardProps) {
    const { options } = props
    return (
        options.map(({ id, title, href, icon: Icon }) => (
            <a key={id}
                href={href}
                className='md:w-[300px] text-center text-pretty 
                           flex flex-col items-center justify-center gap-4 p-6 text-xl 
                           rounded-md bg-blue-100/90 dark:bg-blue-100/20 hover:bg-blue-200 
                           transition-all duration-300 cursor-pointer'
            >
                <p>{title}</p>
                <Icon className="md:size-20 size-10" />
            </a>
        ))
    )
}
