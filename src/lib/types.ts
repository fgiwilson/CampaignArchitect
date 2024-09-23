//Interfaces for Mongoose

//World
export interface RPGAWorld {
    name: string;
    numCampaigns?: number;
    worldImage?:MediaImage;
}
const worldSchema = new Schema<RPGAWorld>({
    name: {type: String, required:true},
    numCampagins: {}

})