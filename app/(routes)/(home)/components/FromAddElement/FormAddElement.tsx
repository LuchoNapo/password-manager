"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { formSchema } from "./FormAddElement.form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Copy, Earth, Eye, Shuffle } from "lucide-react"
import { copyClicboard } from "@/lib/copyClickBoard"
import { useState } from "react"
import { generatePassword } from "@/lib/generatePassword"
import { Textarea } from "@/components/ui/textarea"


export default function FormAddElement() {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            typeElement: "",
            isFavotrite: false,
            name: "",
            directory: "",
            userName: "",
            password: "",
            urlWebsite: "",
            notes: "",
            userId: "asdasfasf",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const generateRandomPassword = () => {
        const password = generatePassword()
        form.setValue("password", password)
    }

    const updateUrl = () => {
        form.setValue("urlWebsite", window.location.href)
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid-cols-2 gap-y-2 grid gap-x-4 md:-mt-10">
                    <FormField
                        control={form.control}
                        name="typeElement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>¿Qué tipo de elemento necesitas?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona un elemento" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Inicio de sessión">
                                            Inicio de sessión
                                        </SelectItem>
                                        <SelectItem value="Tarjeta">
                                            Tarjeta
                                        </SelectItem>
                                        <SelectItem value="Identidad">
                                            Identidad
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isFavotrite"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>¿Quieres seleccionar tu contraseña como favorita?</FormLabel>
                                <div className="flex flex-row items-start space-x-3 space-y-0 p-4">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Marcar como favorito</FormLabel>
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="directory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Directorio</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige el directorio" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Social">
                                            Social
                                        </SelectItem>
                                        <SelectItem value="Arts">
                                            Arts
                                        </SelectItem>
                                        <SelectItem value="Shopping">
                                            Shopping
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="userName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <div className="relative">


                                        <Input {...field} />
                                        <Copy className="absolute right-3 top-3 cursor-pointer" size={18}
                                            onClick={() => copyClicboard(field.value)} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="urlWebsite"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>URL Website</FormLabel>
                                <FormControl>
                                    <div className="relative">


                                        <Input {...field} />
                                        <Earth className="absolute right-3 top-3 cursor-pointer" size={18} onClick={updateUrl} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex justify-between">
                                    Password
                                    <Shuffle className="curosr-pointer" size={13} onClick={() => generateRandomPassword()} />
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input {...field} type={showPassword ? "text" : "password"} />
                                        <Eye className="absolute right-10 top-3 cursor-pointer" size={18} onClick={() => setShowPassword(!showPassword)} />
                                        <Copy className="absolute right-3 top-3 cursor-pointer" size={18}
                                            onClick={() => copyClicboard(field.value)} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <div>
                        <div className="text-slate-400 flex items-center justify-between text-sm">
                            Autenticación OTP
                            <p className="px-3 bg-blue-400  text-white rounded-lg text-xs mr-5 mb-1">Premium</p>
                        </div>
                        <Input disabled />
                    </div>
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notas</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <div />
                    <Button type="submit">Guardar</Button>
                </form>
            </Form>
    )
}