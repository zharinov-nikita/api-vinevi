import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AlbumModule } from './album/album.module'
import { ArtistModule } from './artist/artist.module'
import { TrackModule } from './track/track.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/api-vinevi'),
    ArtistModule,
    AlbumModule,
    TrackModule,
  ],
})
export class AppModule {}
