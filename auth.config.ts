import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: '/',
    newUser: '/dashboard',
    error: '/login-error',
  },
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === '/api/auth/signin') {
        return '/dashboard';
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, user }: { session: Session; user: User }) {
      session.user = {
        ...session.user,
        id: user?.id ?? 'unknown',
      };
      return session;
    },
    authorized({ auth }: { auth: { user?: any } }) {
      return !!auth?.user;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
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

