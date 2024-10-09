import type { PageServerLoad } from './$types';
import { WorldModel } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';
import { error } from '@sveltejs/kit';

if (mongoose.connection.readyState === 0) {
	dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const id = params.slug;
	const foundWorld = await WorldModel.findById(id);

	if (foundWorld) {
		const theWorld = JSON.parse(JSON.stringify(foundWorld));
		return {
			theWorld
		};
	}

	error(404, 'Not Found');
};
