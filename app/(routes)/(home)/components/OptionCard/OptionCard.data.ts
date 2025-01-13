import { WordpressIcon } from "@/components/Icons/WordpressIcon";
import { ChartNoAxesColumn, FolderClosed, RectangleEllipsis } from "lucide-react";

export const Options = [
    {
        id: 1,
        title: "Todos los elementos",
        href: "/all-boxes",
        icon: FolderClosed,
    },
    {
        id: 2,
        title: "Wordpress",
        href: "/wordpress-elements",
        icon: WordpressIcon,
    },
    {
        id: 3,
        title: "Generator",
        href: "/generator",
        icon: RectangleEllipsis,
    },
    {
        id: 4,
        title: "Analytics",
        href: "/analytics",
        icon: ChartNoAxesColumn,
    },
]