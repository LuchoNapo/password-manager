/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import FormAddElement from "../FromAddElement/FormAddElement";
import { HeaderMainProps } from "./HeaderMain.type";

export default function HeaderMain(props: HeaderMainProps) {
    const { userID } = props;
    const [typeElement, setTypeElement] = useState<"password" | "folder" | "">("");
    const [openDialog, setOpenDialog] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)

    const closeDialogAndDropdown = () => {
        setTypeElement("");
        setOpenDialog(false);
        setOpenDropdown(false);
    }
    
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold">Todas las cajas fuertes</h1>
            <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                <DropdownMenuTrigger asChild className="mr-5">
                    <Button>
                        Nueva <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0">
                    <DropdownMenuLabel>
                        <div className="flex flex-col">
                            {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                                <Dialog key={typeElement} onOpenChange={setOpenDropdown}>
                                    <DialogTrigger asChild>
                                        <Button
                                            className="flex justify-start"
                                            variant="ghost"
                                            onClick={() => setTypeElement(typeElement)}
                                        >
                                            <Icon className="mr-2 size-5" />
                                            {text}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[825px] w-[90%] h-[80%] overflow-scroll rounded-md">
                                        <DialogHeader>
                                            <DialogTitle className="text-slate-500">Nuevo elemento: <span className="text-gray-800">{text}</span></DialogTitle>
                                        </DialogHeader>
                                        {typeElement === "password" && (
                                         <FormAddElement userID={userID} closeDialog={closeDialogAndDropdown} />
                                        )}
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
