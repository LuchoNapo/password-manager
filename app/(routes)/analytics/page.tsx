import { getServerSession } from "next-auth"
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import { countPasswords } from "@/lib/countPassword";
import { RepeteadedPassword } from "./components/RepeatedPasswordChart/RepeteadedPassword";

export default async function AnalyticsPage() {
    const session = await getServerSession()
    if (!session || !session.user?.email) {
        redirect("/")
    }
    const user = await db.user.findFirst({
        where: {
            email: session.user.email
        },
        include: {
            elements: {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })
    if (!user || !user.elements) {
        redirect("/")
    }
    const {unique, repeated} = countPasswords(user.elements)    

  return (
    <div className="grid md:grid-cols-2 gap-5 mb-4">
        <RepeteadedPassword repeated={repeated} unique={unique} />
        <div>
            Second block
        </div>
        <div>
           block
        </div>
    </div>
  )
}
