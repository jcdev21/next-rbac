import { Permissions, SidebarNavItem } from '@/types';
import { db } from '@/lib/db';

type ResponseAccessPermission = {
	permissions: Permissions[];
};

export async function getAccessPermission(
	role: string | undefined
): Promise<ResponseAccessPermission> {
	if (!role)
		return {
			permissions: [],
		};

	const permissions = (await db.permission.findMany({
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
	})) as Permissions[];

	return { permissions };
}
