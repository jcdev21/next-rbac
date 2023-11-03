'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function FormLogin() {
	const router = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
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
	}

	return (
		<form method="POST" onSubmit={handleSubmit}>
			<input type="email" name="email" placeholder="email" />
			<br />
			<input type="password" name="password" placeholder="password" />
			<br />
			<button className="p-2 bg-sky-400 rounded-md">login</button>
		</form>
	);
}
