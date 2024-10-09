import { dbConnect } from '$lib/server/db';
import mongoose from 'mongoose';

if (mongoose.connection.readyState !== 1) {
	dbConnect();
}
