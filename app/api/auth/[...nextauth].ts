import NextAuth from 'next-auth';
import { authConfig } from '../../../auth.config'; // Import your NextAuth config from auth.config.ts

export default NextAuth(authConfig);