import { ObjectId } from 'mongoose'

export class CreateTrackDto {
  readonly title: string
  readonly cover: string
  readonly lyric: string
  readonly artistId: ObjectId
  readonly albumId: ObjectId
}
