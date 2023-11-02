import { SidebarNavItem } from '@/types';
import Link from 'next/link';
import React from 'react';

type SideNavProps = {
	items: SidebarNavItem[];
};

export default function SideNav({ items }: SideNavProps) {
	return (
		<nav className="grid items-start gap-2">
			{items.map((item, idx) => {
				return (
					<Link key={idx} href={item.href || '/'}>
						<span>{item.title}</span>
					</Link>
				);
			})}
		</nav>
	);
}
