import type { Actions } from './$types';
import { dbConnect, dbDisconnect,} from '$lib/server/db';
import { WorldModel } from '$lib/models/models';


export const actions = {
	default: async ({request}) => {
		await dbConnect();
		const data = await request.formData();
		const nWorldName = data.get('worldName');

		const newWorld= {
			name: nWorldName,
		};
		await WorldModel.create(newWorld);
		await dbDisconnect();
	},
} satisfies Actions;