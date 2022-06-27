import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type TrackDocument = Track & Document

@Schema()
export class Track {
  @Prop({ type: String, required: true })
  title: string

  @Prop({ type: String, required: true })
  cover: string

  @Prop({ type: String, required: true })
  lyric: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Artist', required: true })
  artistId: ObjectId

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Album', required: false })
  albumId: ObjectId
}

export const TrackSchema = SchemaFactory.createForClass(Track)
