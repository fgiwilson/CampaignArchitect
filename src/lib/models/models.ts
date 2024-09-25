import type { RPGAWorld } from '$lib/utils/types';
import {Schema, model} from 'mongoose'
 
//schemas
const worldSchema = new Schema<RPGAWorld>({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false },
	worldImage: { type: String, required: false }
});

export const WorldModel = model<RPGAWorld>('Worlds', worldSchema);