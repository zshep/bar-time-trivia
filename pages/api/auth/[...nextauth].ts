import NextAuth from 'next-auth';
import { authConfig } from '../../../auth.config'; // Replace with the correct path to `authConfig`

export default NextAuth(authConfig);