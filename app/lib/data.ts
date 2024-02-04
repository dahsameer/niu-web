import {
	BatteryDetails,
	NiuResponse,
	RideDetail,
	TrackMileage,
	VehicleDetail,
} from './definitions';
import { get, post } from './niu-api';

export async function fetchRides(token: string, sn_id : string): Promise<RideDetail[]> {
	//noStore();
	try {
		const data = await post("v5/track/list/v3", token, JSON.stringify({
			index: "0",
			pagesize: 10,
			sn: sn_id
		}));
		const ride_details = data as NiuResponse<{items: RideDetail[], track_mileage: TrackMileage[]}>;
		return ride_details.data?.items ?? [];
	} catch (error) {
		console.error('API Error:', error);
		throw new Error('Failed to fetch rides data.');
	}
}

export async function fetchVehicles(token: string): Promise<VehicleDetail[]> {
	// Add noStore() here to prevent the response from being cached.
	try {
		const data = await get("v5/scooter/list", token);
		const ride_details = data as NiuResponse<{items: VehicleDetail[]}>;
		return ride_details.data?.items ?? [];
	} catch (error) {
		console.error('API Error:', error);
		throw new Error('Failed to fetch rides data.');
	}
}

export async function fetchBatteryHealth(token: string, sn_id: string): Promise<BatteryDetails> {
	// Add noStore() here to prevent the response from being cached.
	try {
		const date_epoch = Math.floor(Date.now() / 1000);
		const data = await get(`v3/motor_data/battery_info/health?sn=${sn_id}&_=${date_epoch}`, token);
		const ride_details = data as NiuResponse<BatteryDetails>;
		return ride_details.data;
	} catch (error) {
		console.error('API Error:', error);
		throw new Error('Failed to fetch battery data.');
	}
}