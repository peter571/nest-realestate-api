import { Schema } from 'mongoose';

export class CreatePropertyDto {
    owner: Schema.Types.ObjectId;
    images: [];
    verified: boolean;
    rooms: number;
    bathrooms: number;
    price: string;
    sqft: number;
    description: string;
    place: string;
    type: string;
    availability: boolean;
}
