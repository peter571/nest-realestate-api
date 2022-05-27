import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { RealtorsModule } from 'src/realtors/realtors.module';
import { AuthController } from './auth.controller';


@Module({
  imports: [RealtorsModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
