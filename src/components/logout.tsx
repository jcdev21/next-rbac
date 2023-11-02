'use client';

import { signOut } from 'next-auth/react';
import React from 'react';

export default function Logout() {
	async function logoutHandle() {
		await signOut();
	}

	return <button onClick={logoutHandle}>Logout</button>;
}
