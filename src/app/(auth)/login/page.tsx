import React from 'react';
import FormLogin from '@/components/form-login';

export default function Login() {
	return (
		<div className="md:h-screen md:flex">
			<div className="md:w-1/2 bg-slate-200 p-4 flex justify-center items-center mb-10 md:mb-0">
				<ul className="[&>*]:mb-4">
					<li>
						<p className="text-sm font-semibold">Super Admin</p>
						<p className="text-sm">Email : superadmin@gmail.com</p>
						<p className="text-sm">Password : qwerty123</p>
					</li>
					<li>
						<p className="text-sm font-semibold">Admin</p>
						<p className="text-sm">Email : admin@gmail.com</p>
						<p className="text-sm">Password : qwerty123</p>
					</li>
					<li>
						<p className="text-sm font-semibold">User</p>
						<p className="text-sm">Email : user@gmail.com</p>
						<p className="text-sm">Password : qwerty123</p>
					</li>
				</ul>
			</div>
			<div className="md:w-1/2 md:h-screen flex flex-col justify-center items-center">
				<h1 className="text-3xl font-semibold mb-5">Form Login</h1>
				<FormLogin />
			</div>
		</div>
	);
}
