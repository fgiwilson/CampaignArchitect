import type { PageServerLoad } from './create/$types';
import { Worldm } from '$lib/models/world';
import { dbConnect } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	await dbConnect();
	return {
		worldsL: await Worldm.find({})
	};
};
