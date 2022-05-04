import { Module } from '@nestjs/common';
import { RealtorsService } from './realtors.service';
import { RealtorsController } from './realtors.controller';

@Module({
  controllers: [RealtorsController],
  providers: [RealtorsService]
})
export class RealtorsModule {}
