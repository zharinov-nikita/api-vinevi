import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type AlbumDocument = Album & Document

@Schema()
export class Album {
  @Prop({ type: String, required: true })
  title: string

  @Prop({ type: String, required: true })
  cover: string

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Artist' }] })
  artistId: ObjectId
}

export const AlbumSchema = SchemaFactory.createForClass(Album)
