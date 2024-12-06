import { LucideIcon } from "lucide-react"

export type SingleItemsProps = {
    label: string,
    icon: LucideIcon | React.ElementType,
    href: string;
    onClick?: () => void;
}