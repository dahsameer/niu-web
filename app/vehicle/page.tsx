import { auth } from "@/auth";
import { fetchVehicles } from "../lib/data";
import Image from 'next/image';
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Select your vehicle'
};

export default async function Page() {
	const user = await auth();
	const vehicleList = await fetchVehicles(user?.user?.name!);
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-niu-red">
			<div className="flex flex-grow p-6 md:overflow-y-auto md:p-12 justify-center text-white">
				<div className="text-center">
					<div className="text-2xl font-bold">Select vehicle</div>
					<div className="flex flex-grow flex-row items-center text-black">
						{vehicleList.map(x => {
							return (
								<Link key={x.sn_id} href={"/dashboard/" + x.sn_id} >
									<div className="h-auto bg-white rounded-xl m-10 p-3">
										<Image
											src={x.index_scooter_img}
											width={300}
											height={300}
											alt={"image of your scooter " + x.scooter_name}
										/>
										<p className="font-bold text-lg">{x.scooter_name}</p>
										<p className="text-xs">{x.sku_name}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	)
}