import type { NextAuthConfig } from 'next-auth';
import  NextAuthOptions  from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { Session } from  "next-auth";
 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async session({session, user}) {

      session.user.id = user.id;
      console.log("the session has been initiated");
      console.log("user: ", user);
      console.log("session: ", session);
      return session
    }

  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.SECRET, 
} satisfies NextAuthConfig;

export async function middleware(req: NextRequest) {
  // Await cookies() and headers() calls
  const cookies = await req.cookies;
  const headers = await req.headers;
}