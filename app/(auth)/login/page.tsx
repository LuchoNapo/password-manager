import { getServerSession } from "next-auth";
import ImageAuth from "./components/ImageAuth/ImageAuth";
import TabsForms from "./components/TabsForms/TabsForms";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession()
  
  if(session) {
    redirect("/")
  }
  

  return (
    <div className="grid md:grid-cols-2 h-full max-h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="text-white flex flex-col items-center justify-center md:p-6 p-2">
          <h1 className="text-gray-900 text-2xl text-center mb-5">Password Manager</h1>
          <h2 className="text-4xl font-medium text-black">Welcome back</h2>
          <p className="text-center mt-4 mb-6 text-slate-400 text-sm">Welcome back, please login to continue</p>
          <div className="md:p-6 p-2">
            <TabsForms />
          </div>
        </div>
      </div>
      <ImageAuth />
    </div>
  )
}
