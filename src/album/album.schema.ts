import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { Artist } from 'src/artist/artist.schema'

export type AlbumDocument = Album & Document

@Schema()
export class Album {
  @Prop({ type: String, required: true })
  title: string

  @Prop({ type: String, required: true })
  cover: string

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Artist' }] })
  artistId: Artist
}

export const AlbumSchema = SchemaFactory.createForClass(Album)
