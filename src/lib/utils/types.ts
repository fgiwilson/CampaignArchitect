//Interfaces for Mongoose Schemas
import { Types } from 'mongoose';
//Locations (geo)
export interface RPGALocation {
	name: string,
	world: Types.ObjectId,
	parentLocation:Types.ObjectId,
	campaigns?: string[],
	type?: string,
	mainImage?: string,
	gallery?: string[],
	description?: string
}
export interface RPGANpc{
	name: string,
	description: string,
	organizations?: Types.ObjectId[],
	world: Types.ObjectId,
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
