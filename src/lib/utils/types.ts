//Interfaces for Mongoose

//World types
export interface RPGAWorld {
	name: string;
	numCampaigns?: number;
	worldImage?: string;
}

//Locations (geo)
export interface RPGALocation{
	name: string;
	world:string;
	campaigns?:[string];
	type?: string;
	mainImage?: string;
	gallery?:[string];
	description?: string;
}

//Campaigns
export interface RPGACampaign{
	name: string;
	world: string;
}

export interface RPGANpc{
	name:string;
	description:string;
	
}