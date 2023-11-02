import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const user = await db.user.findUnique({
					where: { email: credentials?.email },
				});

				if (!user) {
					throw new Error('Failed login');
				}

				if (
					user &&
					credentials?.email &&
					(await compare(credentials.password, user.password))
				) {
					return user;
				} else {
					throw new Error('Failed login');
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (account?.provider === 'credentials') {
				const dbUser = await db.user.findFirst({
					include: {
						role: {
							select: {
								id: true,
								name: true,
							},
						},
					},
					where: { email: token.email! },
				});

				if (!dbUser) {
					if (user) {
						token.id = user.id;
					}
					return token;
				}

				token.id = dbUser.id;
				token.email = dbUser.email;
				token.name = dbUser.name;
				token.picture = dbUser.image;
				token.role = dbUser.role.id;
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
				session.user.role = token.role;
			}

			return session;
		},
	},
};
