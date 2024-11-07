import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from './app/lib/definitions';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}


async function authorizeUser(credentials: { email: string; password: string }): Promise<User | null> {
  const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(3) })
    .safeParse(credentials);

  if (!parsedCredentials.success) {
    console.log('Invalid credentials format');
    return null;
  }

  const { email, password } = parsedCredentials.data;
  const user = await getUser(email);

  if (!user) {
    console.log('User not found');
    return null;
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (passwordsMatch) {
    return user;
  }

  console.log('Invalid credentials');
  return null;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate and assert credentials type
        if (
          credentials &&
          typeof credentials.email === 'string' &&
          typeof credentials.password === 'string'
        ) {
          return await authorizeUser({
            email: credentials.email,
            password: credentials.password,
          });
        }

        console.log('Invalid credentials format');
        return null;
      },
    }),
  ],
});
