"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export default function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Asegúrate de que el componente está montado
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Mientras el cliente no está montado, evita renderizar contenido que dependa del tema
        return null
    }


    return (
        <button
            className="flex items-center justify-center
                        size-10 bg-slate-200 dark:bg-slate-800 rounded-full 
                        hover:bg-slate-300 dark:hover:bg-slate-700 
                        transition-all duration-300 fixed bottom-10 right-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white" />
            ) : (
                <Moon className="w-5 h-5 text-gray-800" />
            )}
        </button>)
}
