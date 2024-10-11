import type { PageServerLoad } from './create/$types';
//import { WorldModel } from '$lib/models/models';
import { CampaignModel } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}

export const load: PageServerLoad = async () => {
	const foundCampaigns = JSON.parse(JSON.stringify(CampaignModel.find()));

	return foundCampaigns;
};
