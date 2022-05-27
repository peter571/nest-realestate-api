import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PropertySchema } from './properties.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }])],
  controllers: [PropertiesController],
  providers: [PropertiesService]
})
export class PropertiesModule {}
