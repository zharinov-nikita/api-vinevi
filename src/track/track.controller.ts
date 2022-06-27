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
import { CreateTrackDto } from './dto/create-track.dto'
import { UpdateTrackDto } from './dto/update-track.dto'
import { Track } from './track.schema'
import { TrackService } from './track.service'

@Controller('api/track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  async create(@Body() dto: CreateTrackDto): Promise<Track> {
    return await this.trackService.create(dto)
  }

  @Get()
  async find(): Promise<Track[]> {
    return await this.trackService.find()
  }
}
