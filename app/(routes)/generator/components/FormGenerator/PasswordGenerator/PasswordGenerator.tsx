import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";

export default function PasswordGenerator(props: PasswordGeneratorProps) {
    const {
        lengthPassword,
        setLengthPassword,
        isMayusSelected,
        setIsMayusSelected,
        isMinusSelected,
        setIsMinusSelected,
        isNumberSelected,
        setNumberSelected,
        isSpecialCharSelected,
        setIsSpecialCharSelected, } = props;

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLengthPassword(Number(event.target.value));
    }

    return (
        <div>
            <>
                <div className="w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center">
                    <label className="block text-sm font-medium text-gray-700 min-w-32">
                        Longitud: {lengthPassword}
                    </label>
                    <input type="range" min="8" max="20" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        value={lengthPassword} onChange={handleRangeChange} />
                </div>
                <div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox id="mayus" checked={isMayusSelected} onCheckedChange={() => setIsMayusSelected(!isMayusSelected)} />
                        <label htmlFor="mayus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">Mayúsculas <span className="italic text-gray-500">A-Z</span></label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox id="minus" checked={isMinusSelected} onCheckedChange={() => setIsMinusSelected(!isMinusSelected)} />
                        <label htmlFor="minus" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">Minúsculas <span className="italic text-gray-500">A-Z</span></label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox id="numbers" checked={isNumberSelected} onCheckedChange={() => setNumberSelected(!isNumberSelected)} />
                        <label htmlFor="numbers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">Numbers <span className="italic text-gray-500">0-9</span></label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox id="special" checked={isSpecialCharSelected} onCheckedChange={() => setIsSpecialCharSelected(!isSpecialCharSelected)} />
                        <label htmlFor="special" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">Caracteres: <span className="italic text-gray-500">!@#$&%^*</span> </label>
                    </div>
                </div>
            </>
        </div>
    )
}
