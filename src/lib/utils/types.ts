//Interfaces for Mongoose Schemas
import { Types } from 'mongoose';

//World types


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
