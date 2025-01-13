import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { FormProfile } from "./FormProfile"

export default async function ProfilePage() {
  const session = await getServerSession()

  if (!session?.user?.email) {
    return redirect("/auth/signin")
  }
  const userDb = await db.user.findUnique({
    where: {
      email: session.user.email
    }
  })
  if (!userDb) {
    return redirect("/auth/signin")
  }

  return (
    <div>
      <h1 className="text-xl">Detalles de la cuenta</h1>
      <FormProfile user={userDb} />
    </div>
  )
}
