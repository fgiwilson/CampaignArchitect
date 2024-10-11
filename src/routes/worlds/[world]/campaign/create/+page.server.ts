import type { Actions } from './$types';
import { dbConnect } from '$lib/server/db';
import { Campaign } from '$lib/models/models';
import { World } from '$lib/models/models';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';

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
		const tempWorld = await World.findById(worldID);
		const world = JSON.parse(JSON.stringify(tempWorld));

		//increment number of campaigns
		const curNumCampaigns = world.numCampaigns;
		const newNumCampaigns = {numCampaigns: curNumCampaigns + 1 };
		World.findByIdAndUpdate(worldID, newNumCampaigns);


		const newCampaign = {
			name: data.get('campaignName'),
			campaignDesc: data.get('campaignDesc'),
			world: worldID
		};
		const cCampaign = await Campaign.create(newCampaign);
		redirect(303, `/worlds/${worldID}/campaigns/${cCampaign._id}`);
	}
} satisfies Actions;
