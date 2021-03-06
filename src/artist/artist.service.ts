import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Artist, ArtistDocument } from './artist.schema'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>
  ) {}

  async create(dto: CreateArtistDto): Promise<Artist> {
    return await this.artistModel.create(dto)
  }

  async find(): Promise<Artist[]> {
    return await this.artistModel.find()
  }

  async findById(_id: ObjectId): Promise<Artist> {
    return await this.artistModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateArtistDto
  ): Promise<Artist> {
    return await this.artistModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Artist> {
    return await this.artistModel.findByIdAndDelete({ _id })
  }
}
