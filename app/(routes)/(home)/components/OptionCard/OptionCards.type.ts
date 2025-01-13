import { ElementType} from "react";

export type OptionCardProps = {
    options: Array<{
        id: number;
        title: string,
        href: string,
        icon: ElementType;
    }>
}