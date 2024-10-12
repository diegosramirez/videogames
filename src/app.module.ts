import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoGamesModule } from './videogames/videogames.module';
import { AppDataSource } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), VideoGamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
