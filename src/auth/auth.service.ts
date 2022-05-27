import { Injectable } from '@nestjs/common';
import { RealtorsService } from '../realtors/realtors.service';
import { sign } from 'jsonwebtoken';
import { Payload } from 'src/types';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
    constructor(private realtorsService: RealtorsService) { }

    async validateUser(payload: Payload) {
        return await this.realtorsService.findByPayload(payload);
      }

    async signPayload(payload: Payload) {
        return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
      }
}
