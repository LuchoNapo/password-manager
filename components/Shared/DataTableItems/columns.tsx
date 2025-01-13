/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"
import { Copy, Globe, Lock, MoreHorizontal, Pencil, User } from "lucide-react";

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
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: () => (
      <div className="flex items-center gap-2">
        <span>URL Website</span>
        <Globe className="size-4" />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <a href={row.original.urlWebsite} target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
            {row.original.typeElement}
          </a>
        </div>
      )
    }
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const password = row.original.password
      const username = row.original.username

      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`
      }
      const copyItemClipboard = (item: string, name: string) => {
        navigator.clipboard.writeText(item)
        toast({
          title: `${name} copiado ✔️`
        })
      }

      return (
        <div className="flex gap-3 justify-start items-center">
          {password && (
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => copyItemClipboard(password, "Password")}>
              <Lock className="size-4" />
              <p>Pass</p>
            </div>
          )}
          {username && (
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={() => copyItemClipboard(username, "Username")}>
              <User className="size-4" />
              <p>User</p>
            </div>
          )}
          <div className="flex flex-col gap-1 justify-center items-center cursor-pointer" onClick={onEditElement}>
            <Pencil className="size-4" />
            <p>Edit</p>
          </div>
        </div>
      )
    }
  },
]
