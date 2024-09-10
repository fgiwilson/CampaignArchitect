import { MONGO_URL } from '$env/static/private';
import { connect } from 'mongoose';

main().catch((err) => console.log(err));
    
async function main() {
	await connect(MONGO_URL);
}
