import type { RPGAWorld } from "$lib/types";
import mongoose from "mongoose";
import { Model } from "mongoose";

//schemas
const worldSchema = new mongoose.Schema<RPGAWorld>({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false },
	worldImage: { type: String, required: false }
});

export const WorldModel:Model<RPGAWorld> = mongoose.model<RPGAWorld>('World', worldSchema);