import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Payload } from 'src/types';
import { ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_KEY
        })
    }

    async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
        const user = await this.authService.validateUser(payload);
        if (!user) {
          return done(
            new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
            false,
          );
        }
        return done(null, user);
      }

}
