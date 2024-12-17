import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db } from "@/lib/db";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "email@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                const user = await db?.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid credentials");
                }
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error("Invalid email or password");
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                };
            },
        }),
    ],
});

export { handler as GET, handler as POST };
