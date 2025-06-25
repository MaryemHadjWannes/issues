import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider(
        {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }
    ),
      ],
  session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  jwt: {
       
  },
  callbacks: {    
  
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: '/auth/signin', // custom sign-in page
    signOut: '/auth/signout', // custom sign-out page
    error: '/error', // Error code passed in query string as ?error=
    verifyRequest: '/verify-request', // (used for check email message)
  }
};