import { adminNav, superAdminNav, userNav } from '@/config/cms';
import { SidebarNavItem } from '@/types';
import { Role } from '@prisma/client';

export function getSideNav(role: Role | undefined): SidebarNavItem[] {
	switch (role) {
		case 'SUPERADMIN':
			return superAdminNav;

		case 'ADMIN':
			return adminNav;

		case 'USER':
			return userNav;

		default:
			return [];
	}
}
