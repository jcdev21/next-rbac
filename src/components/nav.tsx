'use client';

import { Permissions, SidebarNavItem } from '@/types';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';
import { usePermission } from './permission';
import { usePathname } from 'next/navigation';

type SideNavProps = {
	items: SidebarNavItem[];
	permissions: Permissions[];
};

export default function SideNav({ items, permissions }: SideNavProps) {
	const pathname = usePathname();
	const { setPermissions, setMenuSelected } = usePermission();

	const setMenuSelectedPathname = useCallback(() => {
		const menu = items.find((item) => item.href === pathname);
		setMenuSelected(menu?.id || '');
	}, [items, pathname, setMenuSelected]);

	useEffect(() => {
		if (permissions.length === 0) return;
		setPermissions(permissions);
		setMenuSelectedPathname();
	}, [permissions, setPermissions, setMenuSelectedPathname]);

	return (
		<nav className="grid items-start gap-2 bg-yellow-200">
			{items.map((item, idx) => {
				return (
					<Link
						key={idx}
						href={item.href || '/'}
						tabIndex={0}
						role="button"
					>
						<span>{item.title}</span>
					</Link>
				);
			})}
		</nav>
	);
}
