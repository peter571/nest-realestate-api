import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PropertyDocument = Property & mongoose.Document;

@Schema()
export class Property {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Realtor' }

    @Prop({ required: true })
    images: string[];

    @Prop({ required: true })
    verified: boolean;

    @Prop({ required: true })
    rooms: number;

    @Prop({ required: true })
    bathrooms: number;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    sqft: number;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    place: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    availability: boolean;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
