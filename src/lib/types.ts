import { Schema } from 'mongoose';
//Interfaces for Mongoose

//World
export interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: MediaImage;
}

//schemas
export const worldSchema = new Schema<RPGAWorld>({
	name: { type: String, required: true },
	numCampaigns: {type:Number, required: false},
    worldImage: {type: Image, required: false}
});
