import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {

        const {
            name,
            typeElement,
            isFavourite,
            urlWebsite,
            username,
            password,
            notes,
            userId,
            directory
        } = await request.json()

        const element = await db.element.create({
            data: {
                name,
                typeElement,
                isFavourite,
                urlWebsite,
                username,
                password,
                notes,
                userId,
                directory
            }
        });

        return NextResponse.json(element);

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Error", { status: 500 })

    }
}