import HeaderGenerator from "./components/HeaderGenerator/HeaderGenerator";
import { FormGenerator } from "./components/FormGenerator";

export default function Generator() {
  return (
    <div className="p-6">
        <HeaderGenerator />
        <FormGenerator />
    </div>
  )
}
