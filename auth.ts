import NextAuth from "next-auth"

import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    callbacks:{
      async session({ session, user, token }) {
        console.log(session);
        
      return session
    },
    async jwt({ token }) {
      console.log(token);
      return token
      
    }

    },
  ...authConfig,
});