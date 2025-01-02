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
                item: "Google Drive",
                href: "/google-elements",
                icon: GoogleDriveIcon,
            },
            {
                item: "Email",
                href: "email-elements",
                icon: Mail,
            },
            {
                item: "Wordpress",
                href: "wordpress-elements",
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

