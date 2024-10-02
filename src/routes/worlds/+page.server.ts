import type { PageServerLoad } from './create/$types';
import { WorldModel } from '$lib/models/models';
import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';

if(mongoose.connection.readyState !== 1){
	dbConnect();
}
export const load: PageServerLoad = async () => {
	
	const foundWorlds = await WorldModel.find();

	const pWorlds = JSON.parse(JSON.stringify(foundWorlds));

	return{
		pWorlds,
	};
};
