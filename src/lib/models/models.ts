import { Schema, model, Types } from 'mongoose';

//interfaces:
// Player Character Interface
interface RPGAPlayerCharacter {
	name: string;
	campaign: Types.ObjectId;
	player: string;
	race: string;
	class: string;
	level: number;
	experience: number;
	alignment: string;
	background: string;
	inventory: string[];
	abilities: {
		strength: number;
		dexterity: number;
		constitution: number;
		intelligence: number;
		wisdom: number;
		charisma: number;
	};
	hitPoints: {
		current: number;
		max: number;
	};
	armorClass: number;
	skills: { [key: string]: number };
	proficiencies: string[];
	features: string[];
	spells: string[];
	backstory: string;
	notes: string;
	sessions: Types.ObjectId[];
}

// Player Character Schema
const playerCharacterSchema = new Schema<RPGAPlayerCharacter>({
	name: { type: String, required: true },
	campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
	player: { type: String, required: true },
	race: { type: String, required: true },
	class: { type: String, required: true },
	level: { type: Number, default: 1 },
	experience: { type: Number, default: 0 },
	alignment: String,
	background: String,
	inventory: [String],
	abilities: {
		strength: { type: Number, required: true },
		dexterity: { type: Number, required: true },
		constitution: { type: Number, required: true },
		intelligence: { type: Number, required: true },
		wisdom: { type: Number, required: true },
		charisma: { type: Number, required: true }
	},
	hitPoints: {
		current: { type: Number, required: true },
		max: { type: Number, required: true }
	},
	armorClass: Number,
	skills: { type: Map, of: Number },
	proficiencies: [String],
	features: [String],
	spells: [String],
	backstory: String,
	notes: String,
	sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
});

//World Data Model
interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: string;
	mainDesc?: string;
}
//Campaign Data Model
interface RPGACampaign {
	name: string;
	campaignDesc?: string;
	world: Types.ObjectId;
}
//Locations (Geo)
interface RPGALocation {
	name: string;
	world: Types.ObjectId;
	parentLocation: Types.ObjectId;
	campaigns?: Types.ObjectId[];
	type?: string;
	mainImage?: string;
	gallery?: string[];
	description?: string;
}

//NPCs
interface RPGANpc {
	name: string;
	description: string;
	organizations?: Types.ObjectId[];
	world: Types.ObjectId;
	campaigns?: Types.ObjectId[];
	alignment?: string;
	attitude?: string; //towards the party
	sessions?: Types.ObjectId[];
	notes?: string;
	image?: string;
	bonds?: string;
	flaws?: string;
	traits?: string;
	age?: number;
}
interface RPGAFront {
	name: string;
	organization: Types.ObjectId;
	objective: string;
	grimPortants: string[];
	description: string;
}
interface RPGASession {
	name: string;
}
interface RPGAOrg {
	name: string;
	hq?: string;
	locations?: string[];
	leader?: Types.ObjectId;
	members?: Types.ObjectId[];
	notes?: string;
	attitude?: string; //towards the party
}

interface RPGASecret {
	title: string;
	session: Types.ObjectId;
	campaign: Types.ObjectId;
	description: string;
}

const secretSchema = new Schema<RPGASecret>({
	title: { type: String, required: true },
	session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
	campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
	description: { type: String, required: true }
});

//schemas
const locationSchema = new Schema<RPGALocation>({
	name: { type: String, required: true },
	world: { type: Schema.Types.ObjectId, ref: 'World', required: true },
	description: { type: String, required: false },
	npcs: [{ type: Schema.Types.ObjectId, ref: 'Character', required: false }],
	organizations: [{ type: Schema.Types.ObjectId, ref: 'Org', required: false }],
	campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign', required: false }],
	image: { type: String, required: false }
});

const npcSchema = new Schema<RPGANpc>({
	name: { type: String, required: true },
	campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
	class: { type: String, required: false },
	race: { type: String, required: false },
	alignment: { type: String, required: false },
	attitude: { type: String, required: false },
	sessions: [{ type: Schema.Types.ObjectId, ref: 'Session', required: false }],
	notes: { type: String, required: false },
	image: { type: String, required: false },
	bonds: { type: String, required: false },
	flaws: { type: String, required: false },
	traits: { type: String, required: false },
	age: { type: Number, required: false }
});

const frontSchema = new Schema<RPGAFront>({
	name: { type: String, required: true },
	organization: { type: Schema.Types.ObjectId, ref: 'Org', required: true },
	objective: { type: String, required: true },
	grimPortants: [{ type: String, required: true }],
	description: { type: String, required: true }
});

const sessionSchema = new Schema<RPGASesion>({
	name: { type: String, required: true }
});

const orgSchema = new Schema<RPGAOrg>({
	name: { type: String, required: true },
	hq: { type: String, required: false },
	locations: [{ type: String, required: false }],
	leader: { type: Schema.Types.ObjectId, ref: 'Character', required: false },
	members: [{ type: Schema.Types.ObjectId, ref: 'Character', required: false }],
	notes: { type: String, required: false },
	attitude: { type: String, required: false }
});

const worldSchema = new Schema<RPGAWorld>({
	name: { type: String, required: true },
	numCampaigns: { type: Number, required: false, default: 0 },
	worldImage: { type: String, required: false },
	mainDesc: { type: String, required: false }
});

const campaignSchema = new Schema<RPGACampaign>({
	name: { type: String, required: true },
	campaignDesc: { type: String, required: false },
	world: { type: Schema.Types.ObjectId, ref: 'World', required: true }
});

//export models
export const World = model<RPGAWorld>('World', worldSchema);
export const Campaign = model<RPGACampaign>('Campaign', campaignSchema);
export const NPC = model<RPGANpc>('Character', npcSchema);
export const Front = model<RPGAFront>('Front', frontSchema);
export const Session = model<RPGASession>('Session', sessionSchema);
export const Org = model<RPGAOrg>('Org', orgSchema);
export const Location = model<RPGALocation>('Location', locationSchema);
export const Secret = model<RPGASecret>('Secret', secretSchema);
export const PlayerCharacter = model<RPGAPlayerCharacter>('PlayerCharacter', playerCharacterSchema);
