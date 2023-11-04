'use client';

import { Access, Permissions } from '@/types';
import React, { createContext, useContext, useState } from 'react';

type PermissionContextType = {
	setPermissions: (params: Permissions[]) => void;
	menuSelected: string;
	setMenuSelected: (params: string) => void;
	isAuthorized?: (params: keyof Access) => boolean;
};

const PermissionContext = createContext<PermissionContextType>({
	setPermissions: (params: Permissions[]) => {},
	menuSelected: '',
	setMenuSelected: (params: string) => {},
});

export default function PermissionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [permissions, _setPermissions] = useState<Permissions[]>([]);
	const [menuSelected, _setMenuSelected] = useState<string>('');

	function setPermissions(permissions: Permissions[]) {
		_setPermissions(permissions);
	}

	function setMenuSelected(menuId: string) {
		_setMenuSelected(menuId);
	}

	function isAuthorized(access: keyof Access): boolean {
		const permissionSelected = permissions.find(
			(permission) => permission.menuId === menuSelected
		);

		return permissionSelected?.access[access] as boolean;
	}

	return (
		<PermissionContext.Provider
			value={{
				menuSelected,
				setPermissions,
				setMenuSelected,
				isAuthorized,
			}}
		>
			{children}
		</PermissionContext.Provider>
	);
}

export function usePermission() {
	const context = useContext(PermissionContext);
	return context;
}
