import NextAuth from "next-auth"

import authConfig from "@/auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    callbacks:{
      async session({ session, user, token }) {
        
      return session
    },
    async jwt({ token }) {
      return token
      
    }

    },
    secret: process.env.AUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    session: { strategy: "jwt" },
  ...authConfig,
});