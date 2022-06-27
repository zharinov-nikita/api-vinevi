import { ObjectId } from 'mongoose'

export class UpdateTrackDto {
  readonly title: string
  readonly cover: string
  readonly lyric: string
  readonly artistId: ObjectId
  readonly albumId: ObjectId
}
