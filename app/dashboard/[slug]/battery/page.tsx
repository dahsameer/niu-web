import { Metadata } from 'next';
import { fetchBatteryDetails, fetchBatteryHealth } from '@/app/lib/data';
import { auth } from "../../../../auth";
import { Battery50Icon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
	title: 'Niu Battery Details'
};
export const runtime = 'edge'

export default async function Page({ params }: { params: { slug: string } }) {
	const session = await auth();
	const batteryDetails = await fetchBatteryDetails(session!.user!.name!, params.slug);
	return (
		<main>
			<h1 className={`mb-4 text-xl md:text-2xl`}>
				Battery Details
			</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className='border-2 rounded-xl items-center text-center shadow-lg h-[150px] p-2'>
					<div className='items-center'>Battery Details</div>
					<div className='grid gap-6 grid-cols-2'>
						<div>
							<span className='underline'>Battery 1</span>
							<div className=''>
								<span>Health: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentA.gradeBattery}%</span>
							</div>
							<div className=''>
								<span>Charge: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentA.batteryCharging}%</span>
							</div>
							<div className=''>
								<span>Temperature: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentA.temperature}°C</span>
							</div>
						</div>
						<div>
							<span className='underline'>Battery 2</span>
							<div className=''>
								<span>Health: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentB.gradeBattery}%</span>
							</div>
							<div className=''>
								<span>Charge: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentB.batteryCharging}%</span>
							</div>
							<div className=''>
								<span>Temperature: </span><span className='text-niu-red'>{batteryDetails.batteries.compartmentB.temperature}°C</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}