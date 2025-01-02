"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { copyClicboard } from "@/lib/copyClickBoard";
import { Copy, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import { UserGenerator } from "../UserGenerator/UserGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { generateRandomUsername } from "@/lib/generateRandomUser";

export function FormGenerator() {
  const [selectedValue, setSelectedValue] = useState<"password" | "user" | string>("password");
  const [itemValueInput, setItemValueInput] = useState("")
  const [userTypeSelected, setUserTypeSelected] = useState("username")
  const [lengthPassword, setLengthPassword] = useState(11)
  const [isMayusSelected, setIsMayusSelected] = useState(true)
  const [isMinusSelected, setIsMinusSelected] = useState(true)
  const [isSpecialCharSelected, setIsSpecialCharSelected] = useState(true)
  const [isNumberSelected, setNumberSelected] = useState(true)

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword(lengthPassword, isMayusSelected, isMinusSelected, isSpecialCharSelected, isNumberSelected)
      setItemValueInput(newPassword)
    }

  }, [lengthPassword, isMayusSelected, isMinusSelected, isSpecialCharSelected, isNumberSelected, selectedValue])

  const handleShuffleClick = () => {
    if (selectedValue === "password") {
      const password = generateCustomPassword(lengthPassword, isMayusSelected, isMinusSelected, isSpecialCharSelected, isNumberSelected)
      setItemValueInput(password)
    } else if (selectedValue === "user") {
      if (userTypeSelected === "email") {
        console.log("email");
      } else {
        const newUserGenerated = generateRandomUsername()
        setItemValueInput(newUserGenerated)
      }
    }
  }

  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateRandomUsername()
      setItemValueInput(newUserGenerated)
    }
  }, [selectedValue, userTypeSelected])


  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input placeholder="input..." value={itemValueInput} readOnly />
        <Copy className="absolute right-12 top-3 cursor-pointer size-5" onClick={() => copyClicboard(itemValueInput)} />
        <Shuffle className="absolute right-2 top-3 cursor-pointer size-5" onClick={() => handleShuffleClick()} />
      </div>
      <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
        <p className="mb-4 text-slate-500">¿Que quieres generar?</p>
        <RadioGroup defaultValue="password" onValueChange={(value) => setSelectedValue(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">
              Password
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">
              Usuario
            </Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" && (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          isMayusSelected={isMayusSelected}
          setIsMayusSelected={setIsMayusSelected}
          isMinusSelected={isMinusSelected}
          setIsMinusSelected={setIsMinusSelected}
          isSpecialCharSelected={isSpecialCharSelected}
          setIsSpecialCharSelected={setIsSpecialCharSelected}
          isNumberSelected={isNumberSelected}
          setNumberSelected={setNumberSelected}
        />
      )}

    </div>
  )
}
