import type { PageServerLoad } from './create/$types';
import { WorldModel } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	
	const foundWorlds = await WorldModel.find().lean();

	const pWorlds = JSON.parse(JSON.stringify(foundWorlds));

	return{
		pWorlds,
	};
};
