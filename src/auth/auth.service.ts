import { Injectable } from '@nestjs/common';
import { RealtorsService } from '../realtors/realtors.service';
import { Payload } from 'src/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private realtorsService: RealtorsService, private jwtService: JwtService) { }

    async validateUser(payload: Payload) {
        return await this.realtorsService.findByPayload(payload);
      }

    async signPayload(payload: Payload) {
        return this.jwtService.sign(payload, { secret: process.env.SECRET_KEY, expiresIn: '7d' });
      }
}
