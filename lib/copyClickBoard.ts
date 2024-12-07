import { toast } from "@/hooks/use-toast"

export const copyClicboard = (value: string) => {
    navigator.clipboard.writeText(value)
    toast({
        title: "Copiado ✓",
    })
}