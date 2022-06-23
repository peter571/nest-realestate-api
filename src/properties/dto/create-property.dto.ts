import { Schema } from 'mongoose';

export class CreatePropertyDto {
    owner: Schema.Types.ObjectId;
    images: string[];
    contact: string;
    title: string;
    rooms: number;
    bathrooms: number;
    price: number;
    sqft: number;
    description: string;
    place: string;
    type: string;
    availability: boolean;
}
