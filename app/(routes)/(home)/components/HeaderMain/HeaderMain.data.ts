import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemsProps } from "./HeaderMain.type";

export const dataHeaderMain:  DataHeaderMainItemsProps[] = [
    {
        icon: KeyRound,
        text: "Elemento",
        typeElement: "password"
    },
    {
        icon: Folder,
        text: "Folder",
        typeElement: "folder"
    }
]