import type { Actions } from './$types';
import { main } from '$lib/db';
import { WorldModel } from '$lib/models/world';

export const actions = {
	default: async ({cookies, request}) => {
		const data = await request.formData();
        const newWorldName = data.get('worldName');
		main();
		
		const newWorld = new WorldModel({
			name: newWorldName,
		});
		await newWorld.save();
	},
} satisfies Actions;