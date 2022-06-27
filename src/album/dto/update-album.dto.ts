import { ObjectId } from 'mongoose'

export class UpdateAlbumDto {
  readonly title: string
  readonly cover: string
  readonly artistId: ObjectId
}
