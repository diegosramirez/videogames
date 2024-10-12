import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VideoGamesService } from './videogames.service';
import { VideoGame } from './videogame.entity';
import { CreateVideoGameDto } from './dto/create-videogame.dto';
import { UpdateVideoGameDto } from './dto/update-videogame.dto';

@Controller('videogames')
export class VideoGamesController {
  constructor(private readonly videoGamesService: VideoGamesService) {}

  @Get()
  findAll(): Promise<VideoGame[]> {
    return this.videoGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VideoGame> {
    return this.videoGamesService.findOne(+id);
  }

  @Post()
  create(@Body() createVideoGameDto: CreateVideoGameDto): Promise<VideoGame> {
    return this.videoGamesService.create(createVideoGameDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVideoGameDto: UpdateVideoGameDto): Promise<VideoGame> {
    return this.videoGamesService.update(+id, updateVideoGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.videoGamesService.remove(+id);
  }
}
