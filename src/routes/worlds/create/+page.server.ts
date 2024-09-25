import type { Actions } from './$types';
//import mongoose from 'mongoose';
import { dbConnect, dbDisconnect,} from '$lib/server/db';
import { Worldm } from '$lib/models/world';

export const actions = {
	default: async ({request}) => {
		await dbConnect();
		const data = await request.formData();
        const newWorldName = data.get('worldName');
		const newWorld = new Worldm({
			name: newWorldName,
		});
		await newWorld.save();
		await dbDisconnect();
	},
} satisfies Actions;