import { Module } from '@nestjs/common';
import { RealtorsService } from './realtors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Realtor, RealtorSchema } from './realtors.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Realtor', schema: RealtorSchema }])],
  controllers: [],
  providers: [RealtorsService],
  exports: [RealtorsService]
})
export class RealtorsModule {}
