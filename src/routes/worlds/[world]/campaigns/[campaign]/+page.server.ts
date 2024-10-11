import type { PageServerLoad } from '../$types';
import { dbConnect } from '$lib/server/db';
import { CampaignModel } from '$lib/models/models';
import mongoose from 'mongoose';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const theCampaign = JSON.parse(JSON.stringify(CampaignModel.findById(params.campaign)));
	return theCampaign;
};
