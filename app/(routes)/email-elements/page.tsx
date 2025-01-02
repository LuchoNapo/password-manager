import { getServerSession } from 'next-auth/next';
import { db } from "@/lib/db";
import DataTabeItems from "@/components/Shared/DataTableItems/DataTableItems"
import { redirect } from 'next/navigation';

export default async function EmailElements() {
    const session = await getServerSession();
    if (!session || !session.user?.email) {

      redirect("/")
    }
    const user = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        elements: {
          where: {
            typeElement: "Email",
          },
          orderBy: {
            createdAt: "desc"
          }
        }
      },
    })
    if (!user || !user.elements) {
      redirect("/");
    }
    return (
      <div>
        <h1 className='text-xl md:text-3xl font-semibold'>Lista de Email Agency</h1>
        <DataTabeItems elements={user.elements} />
      </div>
    )
}

