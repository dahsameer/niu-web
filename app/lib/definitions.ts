// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type NiuResponse<T> = {
	data: T
	desc: string
	status: number
}
export interface User {
	id?: string
	name?: string | null
	email?: string | null
	image?: string | null
}

export type UserObj = {
	token: {
		access_token: string
		refresh_token: string
		refresh_token_expires_in: number
		token_expires_in: number
	}
	user: {
		user_id: string
		mobile: string
		email: string
		country_code: string
		nick_name: string
		real_name: string
		last_name: string
		identification_code: string
		birthdate: string
		gender: number
		avatar: string
		thumb_avatar: string
		profession: number
		income: number
		car_owners: number
		purpose: string
		sign: string
		background: string
		height: number
		weight: number
	}
};

export type RideDetail = {
	id: number
	trackId: string
	startTime: number
	endTime: number
	distance: number
	avespeed: number
	ridingtime: number
	type: string
	date: number
	startPoint: Position
	lastPoint: Position
	track_thumb: string
	power_consumption: number
	meet_count: number
	sn: string
	sku_name: string
	trackCategory: number
}

export type Position = {
	lng: string
	lat: string
}

export type TrackMileage = {
	date: number
	mileage: number
}

export type Customer = {
	id: string;
	name: string;
	email: string;
	image_url: string;
};

export type Rides = {
	trackId: string;
	startTime: number;
	endTime: number;
	distance: number;
	track_thumb: string;
	date: number;
};

export type VehicleDetail = {
	sn_id: string
	isDefault: boolean
	index_scooter_img: string
	index_scooter_img_dark: string
	sku_name: string
	scooter_name: string
	product_type: string
	carframe_id: string
	isMaster: boolean
	is_first_access: boolean
	expire_time: number
}

export type BatteryDetails = {
	batteries: Batteries
	isDoubleBattery: boolean
}
export interface Batteries {
  compartmentA: Battery
  compartmentB: Battery
}
export interface Battery {
  bmsId: string
  isConnected: boolean
  gradeBattery: string
  faults: any[]
  healthRecords: HealthRecord[]
}
export interface HealthRecord {
  result: string
  chargeCount: string
  color: string
  time: number
  name: string
}