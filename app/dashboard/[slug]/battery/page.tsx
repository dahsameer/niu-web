import { Metadata } from 'next';
import { fetchBatteryHealth } from '@/app/lib/data';
import { auth } from "../../../../auth";

export const metadata: Metadata = {
	title: 'Niu Battery Details'
};
export const runtime = 'edge'

export default async function Page({ params }: { params: { slug: string } }) {
	const session = await auth();
	const rides = await fetchBatteryHealth(session!.user!.name!, params.slug);
	return (
		<main>
			<h1 className={`mb-4 text-xl md:text-2xl`}>
				Battery Details
			</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
				{/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
				{/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
				{/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<div>
					
				</div>
			</div>
		</main>
	);
}