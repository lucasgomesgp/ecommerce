import NextAuth from "next-auth";

declare module "next-auth"{
    interface Session{
        accessToken: string;
        user:{
            id: string;
            name?: string;
            email?: string;
            image?: string;
            phone?: string;
        }
    }
}