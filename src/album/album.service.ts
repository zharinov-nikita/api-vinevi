import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Album, AlbumDocument } from './album.schema'
import { CreateAlbumDto } from './dto/create-album.dto'
import { UpdateAlbumDto } from './dto/update-album.dto'

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>
  ) {}

  async create(dto: CreateAlbumDto): Promise<Album> {
    return await this.albumModel.create(dto)
  }

  async find(): Promise<Album[]> {
    return await this.albumModel.find()
  }

  async findById(_id: ObjectId): Promise<Album> {
    return await this.albumModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdateAlbumDto): Promise<Album> {
    return await this.albumModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Album> {
    return await this.albumModel.findByIdAndDelete({ _id })
  }
}
