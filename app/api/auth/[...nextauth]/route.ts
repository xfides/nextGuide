import NextAuth from 'next-auth';
import { authConfig } from '../../../../auth.config'; // <-- ВАЖНО: Настройте этот путь!

const { handlers: { GET, POST } } = NextAuth(authConfig);

export { GET, POST };
