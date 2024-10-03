import { Schema, model, Types } from 'mongoose';

//World Data Model
export interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: string;
	mainDesc?:string;
}
//schemas
const worldSchema = new Schema({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false },
	worldImage: { type: String, required: false },
	mainDesc:{type: String, required: false},
});
//Campaign Data Model
export interface RPGACampaign {
	name: string;
	world: Types.ObjectId;
}
const campaignSchema = new Schema({
	name: { type: String, required: true },
	world: { type: Schema.Types.ObjectId, ref: 'WorldModel', required:true }
});

//export models
export const WorldModel = model<RPGAWorld>('Worlds', worldSchema);
export const CampaignModel = model<RPGACampaign>('Campaigns', campaignSchema);