import type { Actions } from './$types';
import { dbConnect } from '$lib/server/db';
import { WorldModel } from '$lib/models/models';
import { redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request }) => {
		if (!dbConnect()) {
			await dbConnect();
		}
		const data = await request.formData();
		const nWorldName = data.get('worldName');

		const newWorld = {
			name: nWorldName
		};
		await WorldModel.create(newWorld);
		redirect(303, '/worlds');
	}
} satisfies Actions;
