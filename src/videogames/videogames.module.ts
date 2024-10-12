import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGamesController } from './videogames.controller';
import { VideoGamesService } from './videogames.service';
import { VideoGame } from './videogame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoGame])],
  controllers: [VideoGamesController],
  providers: [VideoGamesService],
})
export class VideoGamesModule {}
