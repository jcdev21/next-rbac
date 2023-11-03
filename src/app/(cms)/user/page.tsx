export default function User({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<div>
			<h1 className="text-4xl font-bold mb-5">User</h1>
			<div className="flex gap-2">
				<button className="py-1 px-2 rounded-lg shadow bg-green-300">
					Create
				</button>
				<button className="py-1 px-2 rounded-lg shadow bg-yellow-300">
					Update
				</button>
				<button className="py-1 px-2 rounded-lg shadow bg-red-300">
					Delete
				</button>
				<button className="py-1 px-2 rounded-lg shadow bg-sky-300">
					Approve
				</button>
			</div>
		</div>
	);
}
