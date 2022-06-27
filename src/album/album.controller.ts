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
import { CreateAlbumDto } from './dto/create-album.dto'
import { UpdateAlbumDto } from './dto/update-album.dto'
import { Album } from './album.schema'
import { AlbumService } from './album.service'

@Controller('api/album')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Post()
  async create(@Body() dto: CreateAlbumDto): Promise<Album> {
    return await this.albumService.create(dto)
  }
}
