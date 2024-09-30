import * as Interfaces from '$lib/utils/types';
import {Schema, model} from 'mongoose';
 
//schemas
const worldSchema: Schema = new Schema<Interfaces.RPGAWorld>({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false },
	worldImage: { type: String, required: false },
	campaigns: {type: Schema.ObjectId, ref:'Campaign'}
});

const campaignSchema:Schema = new Schema<Interfaces.RPGACampaign>({
	name:{type: String, required: true},
	world:{type: Schema.Types.ObjectId, ref:'WorldModel', required:true}
});


//export models
export const WorldModel = model<Interfaces.RPGAWorld>('Worlds', worldSchema);
export const CampaignModel = model<Interfaces.RPGACampaign>('Campaigns', campaignSchema);