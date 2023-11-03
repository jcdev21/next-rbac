export default function Dashboard({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<div>
			<h1 className="text-4xl font-bold mb-5">Dashboard</h1>
		</div>
	);
}
