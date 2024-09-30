import { MONGO_URL } from '$env/static/private';
import { connect, disconnect } from 'mongoose';

export async function dbConnect() {

	const dbConn = await connect(MONGO_URL).then(() => {
		console.log('Connected to: ' + MONGO_URL);
	});
	return dbConn;
}

export async function dbDisconnect() {
	await disconnect().then(() => {
		console.log('Disconnected from Database');
	});
}
