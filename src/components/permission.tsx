'use client';

import { Permissions } from '@/types';
import React, { createContext, useContext, useState } from 'react';

type PermissionContextType = {
	setPermissions: (params: Permissions[]) => void;
	setMenuSelected: (params: string) => void;
};

const PermissionContext = createContext<PermissionContextType>({
	setPermissions: (params: Permissions[]) => {},
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
		console.log(permissions);
		_setPermissions(permissions);
	}

	function setMenuSelected(menuId: string) {
		console.log(menuId);
		_setMenuSelected(menuId);
	}

	return (
		<PermissionContext.Provider value={{ setPermissions, setMenuSelected }}>
			{children}
		</PermissionContext.Provider>
	);
}

export function usePermission() {
	const context = useContext(PermissionContext);
	return context;
}
