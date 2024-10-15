import { Schema, model, Types } from 'mongoose';

//interfaces: 

//World Data Model
interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: string;
	mainDesc?: string;
	
}
//Campaign Data Model
interface RPGACampaign {
	name: string;
	campaignDesc?: string;
	world: Types.ObjectId;
}
//Locations (Geo)
interface RPGALocation {
	name: string;
	world: Types.ObjectId;
	parentLocation: Types.ObjectId;
	campaigns?: Types.ObjectId[];
	type?: string;
	mainImage?: string;
	gallery?: string[];
	description?: string;
}
//NPCs
interface RPGANpc {
	name: string;
	description: string;
	organizations?: Types.ObjectId[];
	world: Types.ObjectId;
	campaigns?: Types.ObjectId[];
	alignment?: string;
	attitude?: string;//towards the party
	sessions?: Types.ObjectId[];
	notes?:string;
	image?: string;
	bonds?:string;
	flaws?:string;
	traits?:string;
	age?:number;
	
}
interface RPGAFront{
	name: string;
	organization: Types.ObjectId;
	objective:string;
	grimPortants: string[];
	description:string;

}
interface RPGASession {
	name: string;
}
interface RPGAOrg {
	name: string;
	hq?: string;
	locations?: string[];
	leader?: Types.ObjectId;
	members?: Types.ObjectId[];
	notes?: string;
	attitude?: string; //towards the party
}
//schemas
const worldSchema = new Schema({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false, default: 0 },
	worldImage: { type: String, required: false },
	mainDesc: { type: String, required: false }
});

const campaignSchema = new Schema({
	name: { type: String, required: true },
	campaignDesc: { type: String, required: false },
	world: { type: Schema.Types.ObjectId, ref: 'World', required: true }
});

//export models
export const World = model<RPGAWorld>('World', worldSchema);
export const Campaign = model<RPGACampaign>('Campaign', campaignSchema);
