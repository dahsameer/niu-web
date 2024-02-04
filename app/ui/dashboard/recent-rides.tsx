import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { RideDetail } from '@/app/lib/definitions';
import { niu_date_to_date, show_distance, timestamp_to_time } from '@/app/lib/utils';
import Link from 'next/link';
export default async function LatestInvoices({
	recentRides,
}: {
	recentRides: RideDetail[];
}) {
	return (
		<div className="flex w-full flex-col md:col-span-2">
			<div className='flex flex-row justify-between'>
				<h2 className={`mb-4 flex flex-col text-lg md:text-lg`}>
					Recent Rides
				</h2>
			</div>
			<div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-2">
				<div className="bg-white px-1">
					{recentRides.map((ride, i) => {
						const distance = show_distance(ride.distance);
						return (
							<div
								key={ride.trackId}
								className={clsx(
									'flex flex-row items-center justify-between py-1',
									{
										'border-t': i !== 0,
									},
								)}
							>
								<div className="flex items-center">
									<a href={ride.track_thumb} target='_blank'>
										<Image
											src={ride.track_thumb}
											alt={`track id: ${ride.trackId}`}
											className="mr-4"
											width={30}
											height={30}
										/>
									</a>
									<div className="min-w-0">
										<p className="truncate text-sm" title=''>
											<span className='font-semibold text-niu-red' data-timestamp={ride.startTime}>{timestamp_to_time(ride.startTime)}</span>
											<span> to </span>
											<span className='font-semibold text-niu-red' data-timestamp={ride.endTime}>{timestamp_to_time(ride.endTime)}</span>
										</p>
										<p className="hidden text-sm text-gray-500 sm:block">
											{niu_date_to_date(ride.date)}
										</p>
									</div>
								</div>
								<p
									className={`truncate text-sm font-medium md:text-base`}
								>
									<span className='text-niu-red font-semibold'>{distance[0]} </span>
									<span className='text-niu-red-dark'>{distance[1]}</span>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
