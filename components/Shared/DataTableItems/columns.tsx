/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"
import { Copy, MoreHorizontal, User } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnProps = Element;
  

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Elemnt",
  },
  {
    accessorKey: "urlWebsite",
    header: "URL Website",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell:({row}) =>{
        const password = row.original.password
        const username = row.original.username

        const onEditElement= () => {
            window.location.href = `/element/${row.original.id}`
        }
        const copyItemClipboard = (item: string, name: string) => {
            navigator.clipboard.writeText(item)
            toast({
                title: `${name} copiado ✔️`
            })
        }
            
        return (
            <div className="flex gap-2 justify-center items-center">
                {password && (
                    <Copy className="size-4 cursor-pointer" onClick={() => copyItemClipboard(password, "Password")} />
                )}
                {username && (
                    <User className="size-4 cursor-pointer" onClick={() => copyItemClipboard(username, "Username")} />
                )}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={onEditElement}>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                    
                </DropdownMenu>
            </div>
        )
    }
  },
]
