import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ArtistDocument = Artist & Document

@Schema()
export class Artist {
  @Prop({ type: String, required: true })
  title: string

  @Prop({ type: String, required: true })
  avatar: string
}

export const ArtistSchema = SchemaFactory.createForClass(Artist)
