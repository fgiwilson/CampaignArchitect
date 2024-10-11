import type { Actions } from './$types';
import { dbConnect } from '$lib/server/db';
import { CampaignModel } from '$lib/models/models';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';

export const actions = {
	create: async ({ request, params }) => {
		if (mongoose.connection.readyState === 0) {
			await dbConnect();
		}
		const data = await request.formData();
        const worldID = params.world;
		const nCampaignName = data.get('campaignName');
		const nCampaignDesc = data.get('campaignDesc');


		const newCampaign = {
			name: nCampaignName,
			campaignDesc: nCampaignDesc,
            world:worldID
		};
		const cCampaign = await CampaignModel.create(newCampaign);
		redirect(303, `/worlds/${worldID}/campaigns/${cCampaign._id}`);
	}
} satisfies Actions;
