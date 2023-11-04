'use client';

import { usePermission } from '@/components/permission';

export default function Actions() {
	const { isAuthorized } = usePermission();

	function createHandle() {
		console.log('createeee');
	}

	return (
		<div className="flex gap-2 bg-sky-200">
			{isAuthorized!('create') ? (
				<button
					className="py-1 px-2 rounded-lg shadow bg-green-300"
					onClick={createHandle}
				>
					Create
				</button>
			) : null}
			{isAuthorized!('update') ? (
				<button className="py-1 px-2 rounded-lg shadow bg-yellow-300">
					Update
				</button>
			) : null}
			{isAuthorized!('delete') ? (
				<button className="py-1 px-2 rounded-lg shadow bg-red-300">
					Delete
				</button>
			) : null}
			{isAuthorized!('approve') ? (
				<button className="py-1 px-2 rounded-lg shadow bg-sky-300">
					Approve
				</button>
			) : null}
		</div>
	);
}
