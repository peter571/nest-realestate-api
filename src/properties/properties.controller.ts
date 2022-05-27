import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    return await this.propertiesService.create(createPropertyDto);
  }

  @Get()
  async findAll() {
    return await this.propertiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.propertiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return await this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.propertiesService.remove(id);
  }
}
