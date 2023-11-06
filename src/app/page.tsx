import { redirect } from 'next/navigation';

export default async function Home() {
	console.log('masuk ke page home');
	return redirect('/dashboard');
}
