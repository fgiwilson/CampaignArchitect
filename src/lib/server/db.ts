import { MONGO_URL } from '$env/static/private';
import mongoose, { connect, disconnect } from 'mongoose';

export async function dbConnect() {
	await connect(MONGO_URL).then(() => {
		console.log('DB Ready State: ' + mongoose.connection.readyState);
	});
}

export async function dbDisconnect() {
	await disconnect().then(() => {
		console.log('DB Ready State: ' + mongoose.connection.readyState);
	});
}
