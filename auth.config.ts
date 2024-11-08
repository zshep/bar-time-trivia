import type { NextAuthConfig } from 'next-auth';

// helper function to authorize user
function isAuthorized(auth: any, nextUrl: URL): boolean | Response {
  const isLoggedIn = !!auth?.user;
  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard){
    return isLoggedIn;
  } else if( isLoggedIn) {
    return Response.redirect(new URL('/dashboard', nextUrl));
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