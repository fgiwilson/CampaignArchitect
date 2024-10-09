import type { Actions } from './$types';
import { dbConnect } from '$lib/server/db';
import { WorldModel } from '$lib/models/models';
import { redirect } from '@sveltejs/kit';
import mongoose from 'mongoose';

export const actions = {
	create: async ({ request }) => {
		if (mongoose.connection.readyState === 0) {
			await dbConnect();
		}
		const data = await request.formData();
		const nWorldName = data.get('worldName');
		const nWorldDesc = data.get('worldDesc');

		const newWorld = {
			name: nWorldName,
			mainDesc: nWorldDesc
		};
		await WorldModel.create(newWorld);
		redirect(303, '/worlds');
	}
} satisfies Actions;
