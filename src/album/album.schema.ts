import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type AlbumDocument = Album & Document

@Schema()
export class Album {
  @Prop({ type: String, required: true })
  title: string

  @Prop({ type: String, required: true })
  cover: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Artist', required: true })
  artistId: ObjectId
}

export const AlbumSchema = SchemaFactory.createForClass(Album)
