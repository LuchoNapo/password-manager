export type DataHeaderMainItemsProps = {
    icon: React.ComponentType<{className? : string}>
    typeElement: "password" | "folder" | "";
    text: string;
}