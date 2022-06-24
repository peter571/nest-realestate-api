import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PropertySchema } from './properties.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]), AuthModule],
  controllers: [PropertiesController],
  providers: [PropertiesService, JwtStrategy]
})
export class PropertiesModule {}
