import type { PageServerLoad } from './create/$types';
import { World } from '$lib/models/models';
import { Campaign } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';
import { error } from '@sveltejs/kit';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const worldID = params.world;
	console.log(worldID)

	const foundCampaigns = await Campaign.find({ world: worldID }).exec();
	const world = await World.findById(worldID);

	if (foundCampaigns) {
		return {
			campaigns: JSON.parse(JSON.stringify(foundCampaigns)),
			theWorld: JSON.parse(JSON.stringify(world))
		}
	} else {
		error(404, 'Not Found');
	}
};
