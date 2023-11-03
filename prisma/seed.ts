import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const role = await prisma.role.createMany({
		data: [
			{
				name: 'SUPERADMIN',
			},
			{
				name: 'ADMIN',
			},
			{
				name: 'USER',
			},
		],
	});

	const user = await prisma.user.createMany({
		data: [
			{
				email: 'superadmin@gmail.com',
				name: 'Super Admin',
				password:
					'$2b$10$Dq0BQUr8I6VL1fnbIxoZaO94ipX7SnyX4FEIEYd8Y6deolqGFQ74C',
				roleName: 'SUPERADMIN',
			},
			{
				email: 'admin@gmail.com',
				name: 'Admin',
				password:
					'$2b$10$Dq0BQUr8I6VL1fnbIxoZaO94ipX7SnyX4FEIEYd8Y6deolqGFQ74C',
				roleName: 'ADMIN',
			},
			{
				email: 'user@gmail.com',
				name: 'User',
				password:
					'$2b$10$Dq0BQUr8I6VL1fnbIxoZaO94ipX7SnyX4FEIEYd8Y6deolqGFQ74C',
				roleName: 'USER',
			},
		],
		skipDuplicates: true,
	});

	const menu = await prisma.menu.createMany({
		data: [
			{
				id: 'cloi34n51000008jzb9zvdhnw',
				title: 'Dashboard',
				href: '/dashboard',
			},
			{
				id: 'cloi35g5i000108jz5ru6exob',
				title: 'Menu',
				href: '/menu',
			},
			{
				id: 'cloi35o88000208jzg2dmfsw4',
				title: 'User',
				href: '/user',
			},
			{
				id: 'cloi363vv000308jz5dpy8hs3',
				title: 'Post',
				href: '/post',
			},
		],
	});

	const permission = await prisma.permission.createMany({
		data: [
			// SUPERADMIN
			{
				id: 'cloi3839p000408jzfhkq3od0',
				roleName: 'SUPERADMIN',
				menuId: 'cloi34n51000008jzb9zvdhnw',
			},
			{
				id: 'cloi3amdb000508jz1gp6eaee',
				roleName: 'SUPERADMIN',
				menuId: 'cloi35g5i000108jz5ru6exob',
			},
			{
				id: 'cloi3arx5000608jz2mao48qd',
				roleName: 'SUPERADMIN',
				menuId: 'cloi35o88000208jzg2dmfsw4',
			},
			{
				id: 'cloi3awaa000708jzahoy9gpm',
				roleName: 'SUPERADMIN',
				menuId: 'cloi363vv000308jz5dpy8hs3',
			},
			// ADMIN
			{
				id: 'cloi3bzoe000808jz3zncavq8',
				roleName: 'ADMIN',
				menuId: 'cloi34n51000008jzb9zvdhnw',
			},
			{
				id: 'cloi3c3a6000908jz90dz4k0h',
				roleName: 'ADMIN',
				menuId: 'cloi35o88000208jzg2dmfsw4',
			},
			{
				id: 'cloi3c7pl000a08jzdldy2bhd',
				roleName: 'ADMIN',
				menuId: 'cloi363vv000308jz5dpy8hs3',
			},
			// USER
			{
				id: 'cloi3e4in000b08jzbyv53lk9',
				roleName: 'USER',
				menuId: 'cloi34n51000008jzb9zvdhnw',
			},
			{
				id: 'cloi3e7ti000c08jzh94pa62y',
				roleName: 'USER',
				menuId: 'cloi363vv000308jz5dpy8hs3',
			},
		],
	});

	const access = await prisma.access.createMany({
		data: [
			{
				permissionId: 'cloi3839p000408jzfhkq3od0',
				create: false,
				update: false,
				delete: false,
				view: true,
				approve: false,
			},
			{
				permissionId: 'cloi3amdb000508jz1gp6eaee',
				create: true,
				update: true,
				delete: true,
				view: true,
				approve: true,
			},
			{
				permissionId: 'cloi3arx5000608jz2mao48qd',
				create: true,
				update: true,
				delete: true,
				view: true,
				approve: true,
			},
			{
				permissionId: 'cloi3awaa000708jzahoy9gpm',
				create: true,
				update: true,
				delete: true,
				view: true,
				approve: true,
			},
			{
				permissionId: 'cloi3bzoe000808jz3zncavq8',
				create: false,
				update: false,
				delete: false,
				view: true,
				approve: false,
			},
			{
				permissionId: 'cloi3c3a6000908jz90dz4k0h',
				create: false,
				update: false,
				delete: false,
				view: true,
				approve: true,
			},
			{
				permissionId: 'cloi3c7pl000a08jzdldy2bhd',
				create: true,
				update: true,
				delete: true,
				view: true,
				approve: true,
			},
			{
				permissionId: 'cloi3e4in000b08jzbyv53lk9',
				create: false,
				update: false,
				delete: false,
				view: true,
				approve: false,
			},
			{
				permissionId: 'cloi3e7ti000c08jzh94pa62y',
				create: true,
				update: true,
				delete: true,
				view: true,
				approve: false,
			},
		],
	});

	console.log(role, user, menu, permission, access);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
