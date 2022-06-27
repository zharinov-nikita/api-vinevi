import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrackController } from './track.controller'
import { Track, TrackSchema } from './track.schema'
import { TrackService } from './track.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
})
export class TrackModule {}
