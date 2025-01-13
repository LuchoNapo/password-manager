import { getServerSession } from "next-auth"
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import { countPasswords } from "@/lib/countPassword";
import { RepeteadedPassword } from "./components/RepeatedPasswordChart/RepeteadedPassword";
import ViewAnalyticsChart from "./components/ViewAnalyticsChart/ViewAnalyticsChart";
import { TraficDevice } from "./components/TraficDevice";
import { countTypeElement } from "@/lib/countTypeElement";

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
    const { google, wordpress, email } = countTypeElement(user.elements)        

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-5 mb-4">
        <RepeteadedPassword repeated={repeated} unique={unique} total={user.elements.length} />
        <ViewAnalyticsChart wordpress={wordpress} google={google} email={email} />
        <div className="col-span-2">
            <TraficDevice />
        </div>
    </div>
  )
}
