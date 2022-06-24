import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PropertySchema } from './properties.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }])],
  controllers: [PropertiesController, JwtStrategy],
  providers: [PropertiesService]
})
export class PropertiesModule {}
