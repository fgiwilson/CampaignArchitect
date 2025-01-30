import type { PageServerLoad } from './$types';
import { dbConnect } from '$lib/server/db';
import { Campaign } from '$lib/models/models';
import mongoose from 'mongoose';
import { World } from '$lib/models/models';
import {error} from '@sveltejs/kit';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const campaignID = params.campaign;
	const campaign = await Campaign.findById(campaignID);

	if(!campaign) {
		throw error(404, {
			message: 'Campaign with ID ${campaignID} not found'
		});
	}

	const cWorld = await World.findById(campaign.world.toString());

	if(!cWorld) {
		throw error(404, {
			message: `World not found for campaign ${campaignID} not found`
		});
	}
	
	return {
		theCampaign: JSON.parse(JSON.stringify(campaign)),
		theWorld: JSON.parse(JSON.stringify(cWorld))
	};
};
