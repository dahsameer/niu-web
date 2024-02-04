import { Metadata } from 'next';
import RecentRides from '@/app/ui/dashboard/recent-rides';
import { lusitana } from '@/app/ui/fonts';
import { fetchRides } from '@/app/lib/data';
import { auth } from "../../../../auth";

export const metadata: Metadata = {
	title: 'Niu Ride Details'
};

export default async function Page({ params }: { params: { slug: string } }) {
	const session = await auth();
	const rides = await fetchRides(session!.user!.name!, params.slug);
	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<RecentRides recentRides={rides}  />
			</div>
		</main>
	);
}