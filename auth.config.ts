import type { Session, User } from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    async session({ session, user }: {session: Session; user: User}) {
      // Ensure `user` has an `id` before assigning
      if (user?.id) {
        session.user.id = user.id;
      }
      console.log("The session has been initiated");
      console.log("User: ", user);
      console.log("Session: ", session);
      return session;
    }
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ], // Add providers later as needed
  secret: process.env.SECRET,
};

// Middleware function to protect routes
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isOnDashboard = pathname.startsWith('/dashboard');

  // Check for authentication (you may need more specific logic here)
  const authToken = req.cookies.get('next-auth.session-token');
  
  // If user tries to access dashboard without being authenticated, redirect to sign-in
  if (isOnDashboard && !authToken) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
