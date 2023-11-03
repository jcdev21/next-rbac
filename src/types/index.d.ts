export type Access = {
	create: boolean;
	update: boolean;
	delete: boolean;
	view: boolean;
	approve: boolean;
};

export type Permissions = {
	menuId: string;
	access: Access;
};

export type SidebarNavItem = {
	id: string;
	title: string;
	href: string | null;
	submenu?: string | null;
};

export type CMSConfig = {
	sidebarNav: SidebarNavItem[];
};
