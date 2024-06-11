import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "name@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            // TODO: User credentials type from next-aut
            async authorize(credentials: any) {
                // Do zod validation, OTP validation here
                const hashedPassword = await bcrypt.hash(
                    credentials.password,
                    10
                );
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                    },
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(
                        credentials.password,
                        existingUser.password
                    );
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email,
                            avatar: existingUser.avatar,
                        };
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            name: credentials.name,
                            email: credentials.email,
                            password: hashedPassword,
                            provider: "credentials",
                        },
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email,
                    };
                } catch (e) {
                    console.error(e);
                }

                return null;
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async signIn({ account, profile }: any) {
            if (
                account.provider === "google" ||
                account.provider === "github"
            ) {
                const hashedPassword = await bcrypt.hash(profile.email, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: profile.email,
                        provider: account.provider,
                    },
                });

                if (existingUser) {
                    return true
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            name: profile.name,
                            email: profile.email,
                            password: hashedPassword,
                            provider: account.provider,
                            avatar: profile.picture || profile.avatar_url,
                        },
                    });

                    return true
                } catch (e) {
                    console.error(e);
                    return false;
                }
            }
            return true;
        },
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub;

            return session;
        },
    },
};
