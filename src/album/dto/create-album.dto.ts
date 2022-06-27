import { ObjectId } from 'mongoose'

export class CreateAlbumDto {
  readonly title: string
  readonly cover: string
  readonly artistId: ObjectId
}
