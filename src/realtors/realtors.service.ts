import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRealtorDto } from './dto/create-realtor.dto';
import { RealtorDocument, Realtor } from './realtors.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/auth/login.dto';
import * as bcrypt from 'bcrypt';
import { Payload } from 'src/types';

@Injectable()
export class RealtorsService {
  constructor(
    @InjectModel('Realtor') private realtorsModel: Model<RealtorDocument>,
  ) { }

  async register(createRealtorDto: CreateRealtorDto) {
    const { email } = createRealtorDto;
    const user = await this.realtorsModel.findOne({ email });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.realtorsModel(createRealtorDto);
    await createdUser.save();
    let result = createdUser.toObject();
    delete result["password"];
    return result;
  }

  async login(UserDto: LoginDto) {
    const { email, password } = UserDto;
        const user = await this.realtorsModel.findOne({ email });
        if (!user) {
          throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
          let result = user.toObject();
          delete result["password"];
          return result;
        } else {
          throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
        }
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.realtorsModel.findOne({ email });
  }

}
