import type { Actions } from './$types';
import { dbConnect } from '$lib/server/db';
import { Campaign } from '$lib/models/models';
import { World } from '$lib/models/models';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const worldID = params.world;
	const world = await World.findById(worldID);

	return {
		world: JSON.parse(JSON.stringify(world))
	};
};

export const actions = {
	create: async ({ request, params }) => {
		if (mongoose.connection.readyState !== 1) {
			await dbConnect();
		}
		//get data from the form
		const data = await request.formData();
		//grab the world ID from teh URL for later.
		const worldID = params.world;

		//Grab the worlds document to update the numCampaigns
		const worldDoc = await World.findById(worldID);
		const world = JSON.parse(JSON.stringify(worldDoc));
		
		const curNumCampaigns = world.numCampaigns;
		//increment number of campaigns
		const newNumCampaigns = curNumCampaigns + 1;
		await World.findByIdAndUpdate(worldID, { numCampaigns: newNumCampaigns });
		

		const newCampaign = {
			name: data.get('campaignName'),
			campaignDesc: data.get('campaignDesc'),
			world: worldID
		};
		const cCampaign = await Campaign.create(newCampaign);
		redirect(303, `/worlds/${worldID}/campaign/${cCampaign._id}`);
	}
} satisfies Actions;
