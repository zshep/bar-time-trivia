import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from './app/lib/definitions';
import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";


// get User used my Next Auth
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}


// Define Zod schema outside of the function for reusability and readability
const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});


// Main NextAuth code
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        console.log("Starting Authorization...")

        // Parse and validate credentials
        const { success, data } = CredentialsSchema.safeParse(credentials);
        if (!success) {
          console.log("Invalid credentials format");
          console.log(`The data is... ${data}`);
          return null;
        }

        const { email, password } = data;
        console.log(`Attempting to retrieve user with email: ${email}`);

        // Debugging to see if getUser is working properly
          // Fetch user from database
          const user = await getUser(email);
          if (!user) {
            console.log("User not found");
            return null;
          }
  
          console.log("User found, comparing passwords...");
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            console.log("Password does not match");
            return null;
          }
  
          console.log("Authorization successful, returning user");
          return user; // Successfully authenticated


        /* 
        const user = await getUser(email);

        // Check if user exists and password matches
        if (user && (await bcrypt.compare(password, user.password))) {
          return user;
        }

        console.log("Invalid credentials");
        return null;
          */
      },
    }),
  ],
  session: {
    maxAge: 30 * 60, // 30 minutes, in seconds for better readability
    strategy: "jwt",
  },
  callbacks: {
    signIn: async ({ user }) => {
      console.log("Sign-in callback triggered, user:", user);
      return Boolean(user); // Return true if user exists
    },
    redirect: async ({ baseUrl }) => baseUrl, // Redirect to base URL
  },
});