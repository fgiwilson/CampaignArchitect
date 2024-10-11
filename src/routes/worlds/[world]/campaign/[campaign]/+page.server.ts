import type { PageServerLoad } from '../$types';
import { dbConnect } from '$lib/server/db';
import { Campaign } from '$lib/models/models';
import mongoose from 'mongoose';
import { World } from '$lib/models/models';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	
	const campaignID = params.campaign;
	const campaign = await Campaign.findById(campaignID);
	const cWorld = await World.findById(campaign.world);

	return {
		theCampaign : JSON.parse(JSON.stringify(campaign)),
		theWorld : JSON.parse(JSON.stringify(cWorld))
	};
};
