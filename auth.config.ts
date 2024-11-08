import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

//list of protected paths
const protectedPaths = ['/dashboard', '/settings', '/jedi']


// helper function to authorize user
function isAuthorized(auth: any, nextUrl: URL): boolean | Response {
  const isLoggedIn = !!auth?.user; // making sure isLoggin is a boolean
  const isProtectedPath = protectedPaths.some(path => nextUrl.pathname.startsWith(path));

  if (isProtectedPath){
    return isLoggedIn;
  } else if( isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl));
  }
  return true;
}
 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return isAuthorized(auth, nextUrl);  
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.SECRET, 
} satisfies NextAuthConfig;