'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function FormLogin() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);
		const target = e.target as typeof e.target & {
			email: { value: string };
			password: { value: string };
		};
		const email = target.email.value;
		const password = target.password.value;
		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (!res?.error) {
			router.push('/');
		} else {
			console.log(res);
		}

		setIsLoading(false);
	}

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				placeholder="email"
				className="border-2 p-2 rounded-md"
			/>
			<br />
			<input
				type="password"
				name="password"
				placeholder="password"
				className="border-2 p-2 rounded-md"
			/>
			<br />
			<button
				className="py-2 px-4 font-semibold bg-sky-400 text-white rounded-md mt-4"
				disabled={isLoading}
			>
				{isLoading ? 'Loading...' : 'login'}
			</button>
		</form>
	);
}
