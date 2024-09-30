import type { PageServerLoad } from './create/$types';
import { WorldModel } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	await dbConnect();

	let worlds = await WorldModel.find().lean();

	worlds = JSON.parse(JSON.stringify(worlds));

	return{
		worlds,
	};
};
