import { redirect } from 'next/navigation';

export default function Home() {
	console.log('masuk ke page home');
	return redirect('/dashboard');
}
