import Logout from '@/components/logout';
import SideNav from '@/components/nav';
import { getSideNav } from '@/helpers/getSideNav';
import { getCurrentUser } from '@/lib/session';
import React from 'react';

export default async function CMSLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await getCurrentUser();
	console.log(user);
	const sideNavItems = getSideNav(user?.role);

	return (
		<div className="flex min-h-screen flex-col space-y-6">
			<header className="sticky top-0 z-40 border-b bg-background">
				<div className="container flex h-16 items-center justify-between py-4">
					<h3 className="ml-2 text-lg font-semibold">{user?.name}</h3>
					<Logout />
				</div>
			</header>
			<div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
				<aside className="hidden w-[200px] flex-col md:flex">
					<SideNav items={sideNavItems} />
				</aside>
				<main className="flex w-full flex-1 flex-col overflow-hidden">
					{children}
				</main>
			</div>
		</div>
	);
}
