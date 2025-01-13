/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { FromProfileProps } from "./FromProfile.types";
import { set, z } from "zod"
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
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormProfile.form";
import Image from "next/image";
import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { UploadButton } from "@/lib/uploadThings";

export function FormProfile({ user }: FromProfileProps) {
    const [showUploadPhoto, setShowUploadPhoto] = useState(false)
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user.name || "",
            email: user.email || "",
            profileImage: user.profileImage || "",
            username: user.username || "",
            id: user.id

        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch("/api/profile", values)
            toast({
                title: "Datos actualizados",
            })
            router.refresh()
            setShowUploadPhoto(false)
            setPhotoUploaded(false)

        } catch (error) {
            toast({
                title: "Error al guardar",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="max-w-lg">
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile Image</FormLabel>
                                <FormControl>
                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <Image
                                                src={user.profileImage
                                                    ? user.profileImage
                                                    : "/images/default-profile.jpg"}
                                                alt="Profile Image"
                                                width={100}
                                                height={100}
                                                className="rounded-full max-w-[100px] max-h-[100px] object-cover"
                                            />
                                            <div className="w-[150px]">
                                                {showUploadPhoto ? (
                                                    <UploadButton
                                                        className="rounded-md text-white/80 bg-[#111827] mt-3 "
                                                        appearance={{
                                                            button({ isUploading }) {
                                                                return {
                                                                    backgroundColor: "#111827",
                                                                    color: "white",
                                                                    ...(isUploading && { color: "white", backgroundColor: "#111827" }),
                                                                }
                                                            },
                                                            container: "w-[120px] h-15  flex-row rounded-full #111827",
                                                            allowedContent:
                                                                "flex w-full h-5 flex-col items-center justify-center px-2 text-black  bg-slate-200",
                                                        }}
                                                        endpoint="profileImage"
                                                        onClientUploadComplete={(res: { url: string }[]) => {
                                                            form.setValue("profileImage", res?.[0].url)
                                                            setPhotoUploaded(true)
                                                        }}
                                                        onUploadError={(error: Error) => {
                                                            console.error(error)
                                                        }}
                                                        {...field}
                                                    />)
                                                    : (
                                                        <Button className="bg-[#111827]" onClick={() => setShowUploadPhoto(!showUploadPhoto)}>
                                                            <Upload className="mr-2 size-4" />
                                                            Cambiar foto
                                                        </Button>
                                                    )}
                                            </div>
                                        </div>
                                        {photoUploaded && (
                                            <p className="text-sm">Foto cargada</p>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} disabled />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <Input placeholder="Topo Lucho" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Guardar</Button>
                </form>
            </Form>
        </div>
    )
}
