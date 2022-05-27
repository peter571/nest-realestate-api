import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RealtorsModule } from 'src/realtors/realtors.module';
import { PropertiesModule } from 'src/properties/properties.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [RealtorsModule, AuthModule, PropertiesModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.DATABASE_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
