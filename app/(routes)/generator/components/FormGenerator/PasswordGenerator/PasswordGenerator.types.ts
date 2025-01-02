import { Dispatch, SetStateAction } from "react"

export type PasswordGeneratorProps = {
    lengthPassword: number
    setLengthPassword: Dispatch<SetStateAction<number>>
    isMayusSelected: boolean,
    setIsMayusSelected: Dispatch<SetStateAction<boolean>>
    isMinusSelected: boolean,
    setIsMinusSelected: Dispatch<SetStateAction<boolean>>
    isNumberSelected: boolean,
    setNumberSelected: Dispatch<SetStateAction<boolean>>
    isSpecialCharSelected: boolean,
    setIsSpecialCharSelected: Dispatch<SetStateAction<boolean>>
}