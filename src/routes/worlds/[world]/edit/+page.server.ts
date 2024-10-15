import type { Actions } from '../$types';
import { World } from '$lib/models/models';
import type { PageServerLoad } from '../$types';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';
import { redirect } from '@sveltejs/kit';

//connect to DB if not already connected
if (mongoose.connection.readyState !== 1) {
	await dbConnect();
}

export const load: PageServerLoad = async ({ params }) => {
	const worldID = params.world;
	const world = await World.findById(worldID);

	if (world) {
		return {
			world: JSON.parse(JSON.stringify(world))
		};
	}
};

export const actions = {
	edit: async ({ request, params }) => {
		const data = await request.formData();
		const worldID = params.world;

		const worldName = data.get('worldName');
		const worldDesc = data.get('worldDesc');

		const worldUpdates = {
			name: worldName,
			mainDesc: worldDesc
		};
		await World.findByIdAndUpdate(worldID, worldUpdates);
		redirect(303, `/worlds/${worldID}`);
	}
} satisfies Actions;
