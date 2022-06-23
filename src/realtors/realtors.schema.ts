import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export type RealtorDocument = Realtor & mongoose.Document;

export interface HookNextFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error?: Error): any
}

@Schema()
export class Realtor {
  
  @Prop({ required: true })
  email: string;

  @Prop({ requred: true })
  realtorName: string;

  @Prop({ requred: true })
  profileImg: string;

  @Prop({ required: true })
  password: string;
}

export const RealtorSchema = SchemaFactory.createForClass(Realtor);

RealtorSchema.pre('save', async function(next: HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});