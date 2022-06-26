import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
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
}
