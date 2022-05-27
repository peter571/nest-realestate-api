import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyDocument } from './properties.schema';

@Injectable()
export class PropertiesService {

  constructor(
    @InjectModel('Property') private propertyModel: Model<PropertyDocument>,
  ) { }

  async create(createPropertyDto: CreatePropertyDto) {
    const newProperty = await this.propertyModel.create(createPropertyDto);
    return await newProperty.save();
  }

  async findAll() {
    return await this.propertyModel.find().exec();
  }

  async findOne(id: string) {
    return await this.propertyModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    return await this.propertyModel.findByIdAndUpdate(id, updatePropertyDto, {
      new: true,
    });
  }

  async remove(id: string) {
    const deletedProperty = await this.propertyModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProperty;
  }
}
