import { Permissions, SidebarNavItem } from '@/types';
import { db } from '@/lib/db';

type ResponseMenuAccessByRole = {
	menus: SidebarNavItem[];
	permissions: Permissions[];
};

export async function getMenuAccessByRole(
	role: string | undefined
): Promise<ResponseMenuAccessByRole> {
	if (!role)
		return {
			menus: [],
			permissions: [],
		};

	const dataMenus = await db.menu.findMany({
		include: {
			permission: {
				select: {
					menuId: true,
					access: {
						select: {
							create: true,
							update: true,
							delete: true,
							view: true,
							approve: true,
						},
					},
				},
				where: {
					roleName: role,
				},
			},
		},
		where: {
			permission: {
				some: {
					roleName: role,
				},
			},
		},
	});

	const permissions: Permissions[] = [];
	const menus = dataMenus.map((menu) => {
		const { permission, ...restMenu } = menu;
		permissions.push(permission[0] as Permissions);
		return restMenu;
	});

	return { menus, permissions };
}
