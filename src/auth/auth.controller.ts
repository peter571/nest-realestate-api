import { Controller, Request, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RealtorsService } from '../realtors/realtors.service';
import { CreateRealtorDto } from '../realtors/dto/create-realtor.dto';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { LoginDto } from 'src/auth/login.dto';
 
@Controller('auth')
export class AuthController {
  constructor(
    private realtorsService: RealtorsService,
    private authService: AuthService,
    ) {}

  @Post('register')
  async register(@Body() createRealtorDto: CreateRealtorDto) {
    const user = await this.realtorsService.register(createRealtorDto);

    const payload = {  
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };

  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() UserDto: LoginDto) {
    const user = await this.realtorsService.login(UserDto);
      const payload = {
        email: user.email,
      };
      const token = await this.authService.signPayload(payload);
      return { user, token};
  }

}
