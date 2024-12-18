import { Landmark, LayoutList, Lock, Mail, Settings, Star, User } from "lucide-react";
import { WordpressIcon } from "../../Icons/WordpressIcon";
import GoogleDriveIcon from "@/components/Icons/GoogleDriveIcon";

export const dataSidebarElements = [
    {
        title: "Elements",
        icon: LayoutList,
        children: [
            {
                item: "Favourites",
                href: "/favourites",
                icon: Star,
            },
            {
                item: "Google",
                href: "#",
                icon: GoogleDriveIcon,
            },
            {
                item: "Mail",
                href: "#",
                icon: Mail,
            },
            {
                item: "Wordpress",
                href: "#",
                icon: WordpressIcon,
            },
        ]
    }
]

export const dataSidebarConfiguration = [
    {
        title: "Configurations",
        icon: Settings,
        children: [
            {
                item: "Profile",
                href: "#",
                icon: User,
                premium: false,
            },
            {
                item: "Security",
                href: "#",
                icon: Lock,
                premium: true,
            },
            {
                item: "Suscription",
                href: "#",
                icon: Landmark,
                premium: true,
            },
        ]
    }
]

