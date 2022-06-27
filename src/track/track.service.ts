import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Track, TrackDocument } from './track.schema'
import { CreateTrackDto } from './dto/create-track.dto'
import { UpdateTrackDto } from './dto/update-track.dto'

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    return await this.trackModel.create(dto)
  }

  async find(): Promise<Track[]> {
    return await this.trackModel.find()
  }

  async findById(_id: ObjectId): Promise<Track> {
    return await this.trackModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdateTrackDto): Promise<Track> {
    return await this.trackModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Track> {
    return await this.trackModel.findByIdAndDelete({ _id })
  }
}
