import {MONGO_URL} from '$env/static/private';
import { connect } from 'mongoose';

main().catch((err) => console.log(err));
    
export async function main() {
	await connect(MONGO_URL);
	console.log('Connected to: ' + MONGO_URL);
}