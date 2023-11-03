import { adminNav, superAdminNav, userNav } from '@/config/cms';
import { SidebarNavItem } from '@/types';

export function getSideNav(role: string | undefined): SidebarNavItem[] {
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
