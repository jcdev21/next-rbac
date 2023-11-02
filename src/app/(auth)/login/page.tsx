import React from 'react';
import FormLogin from '@/components/form-login';

export default function Login() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-4xl font-bold mb-5">Form Login</h1>
			<FormLogin />
		</div>
	);
}
