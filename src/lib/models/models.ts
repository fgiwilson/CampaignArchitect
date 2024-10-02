import { Schema, model, Types } from 'mongoose';

export interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: string;
	campaigns?: Types.ObjectId[];
	mainDesc?:string;
	
}

//schemas
const worldSchema = new Schema({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false },
	worldImage: { type: String, required: false },
	campaigns: { type: Schema.Types.ObjectId, ref: 'CampaignModel' },
	mainDesc:{type: String, required: false},
	
});

export interface RPGACampaign {
	name: string;
	cWorld: Types.ObjectId;
}

const campaignSchema = new Schema({
	name: { type: String, required: true },
	cWorld: { type: Schema.Types.ObjectId, ref: 'WorldModel', required:true }
});

//export models
export const WorldModel = model<RPGAWorld>('Worlds', worldSchema);
export const CampaignModel = model<RPGACampaign>('Campaigns', campaignSchema);