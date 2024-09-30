//Interfaces for Mongoose
import { Types } from 'mongoose';
//World types
export interface RPGAWorld {
	name: string,
	numCampaigns?: number,
	worldImage?: string,
	campaigns?: Types.ObjectId[]
}

//Locations (geo)
export interface RPGALocation {
	name: string,
	world: Types.ObjectId,
	campaigns?: string[],
	type?: string,
	mainImage?: string,
	gallery?: string[],
	description?: string
}

//Campaigns
export interface RPGACampaign {
	name: string,
	world: Types.ObjectId
}

export interface RPGANpc{
	name: string,
	description: string,
	organizations?: Types.ObjectId[]
}
export interface RPGASession{
	name:string;
}
export interface RPGAOrg {
	name: string,
	hq?: string,
	locations?: string[],
	leader: Types.ObjectId
}
