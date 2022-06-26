import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'
import { Artist } from './artist.schema'
import { ArtistService } from './artist.service'

@Controller('api/artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Post()
  async create(@Body() dto: CreateArtistDto): Promise<Artist> {
    return await this.artistService.create(dto)
  }

  @Get()
  async find(): Promise<Artist[]> {
    return await this.artistService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Artist> {
    return await this.artistService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateArtistDto
  ): Promise<Artist> {
    return await this.artistService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.artistService.findByIdAndDelete(_id)
  }
}
