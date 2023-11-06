import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SidebarNavItem } from '@/types';

export default withAuth(
	async function middleware(req: NextRequest) {
		const token = await getToken({ req });

		const isAuth = !!token;
		const isAuthPage =
			req.nextUrl.pathname.startsWith('/login') ||
			req.nextUrl.pathname.startsWith('/register');

		if (isAuthPage) {
			if (isAuth) {
				return NextResponse.redirect(new URL('/', req.url));
			}

			return null;
		}

		if (!isAuth) {
			let from = req.nextUrl.pathname;
			if (req.nextUrl.search) {
				from += req.nextUrl.search;
			}

			return NextResponse.redirect(
				new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
			);
		}

		if (!isAvailableRoute(req)) {
			// to dashboard page OR denied page
			return NextResponse.redirect(new URL('/dashboard', req.url));
		}
	},
	{
		callbacks: {
			async authorized() {
				// 'true' agar function middleware selalu di panggil
				return true;
			},
		},
	}
);

function isAvailableRoute(req: NextRequest) {
	const cookieStore = cookies();
	const menuCookie = cookieStore.get('menu');
	const menus: SidebarNavItem[] = menuCookie
		? JSON.parse(menuCookie?.value)
		: [];

	if (menus.length > 0) {
		for (const menu of menus) {
			if (req.nextUrl.pathname.startsWith(menu.href as string)) {
				return true;
			}
		}

		return false;
	}
}

export const config = {
	matcher: ['/(.*)', '/login'],
};
