import type { PageServerLoad } from './create/$types';
import { World } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';

if (mongoose.connection.readyState !== 1) {
	await dbConnect();
}
export const load: PageServerLoad = async () => {
	const foundWorlds = JSON.parse(JSON.stringify(await World.find()));

	return {
		foundWorlds
	};
};
