'use client';

import { Permissions, SidebarNavItem } from '@/types';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePermission } from './permission';

type SideNavProps = {
	items: SidebarNavItem[];
	permissions: Permissions[];
};

export default function SideNav({ items, permissions }: SideNavProps) {
	const { setPermissions } = usePermission();

	useEffect(() => {
		if (permissions.length === 0) return;
		setPermissions(permissions);
	}, [permissions, setPermissions]);

	return (
		<nav className="grid items-start gap-2">
			{items.map((item, idx) => {
				return (
					<Link
						key={idx}
						href={{
							pathname: item.href || '/',
							query: {
								menuId: item.id,
							},
						}}
					>
						<span>{item.title}</span>
					</Link>
				);
			})}
		</nav>
	);
}
