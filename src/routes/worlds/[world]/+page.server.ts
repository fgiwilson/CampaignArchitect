import type { PageServerLoad } from './$types';
import { World } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';
import { error } from '@sveltejs/kit';
import { Campaign } from '$lib/models/models';

if (mongoose.connection.readyState === 0) {
	await dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const id = params.world;
	const foundWorld = await World.findById(id);
	const foundCampaigns = await Campaign.find({world: id});

	if (foundWorld) {
		return {
			theWorld: JSON.parse(JSON.stringify(foundWorld)),
			theCampaigns: JSON.parse(JSON.stringify(foundCampaigns))
		};
	} else {
		error(404, 'Not Found');
	}
};
