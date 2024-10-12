import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoGame } from './videogame.entity';
import { CreateVideoGameDto } from './dto/create-videogame.dto';
import { UpdateVideoGameDto } from './dto/update-videogame.dto';

@Injectable()
export class VideoGamesService {
  constructor(
    @InjectRepository(VideoGame)
    private videoGamesRepository: Repository<VideoGame>,
  ) {}

  findAll(): Promise<VideoGame[]> {
    return this.videoGamesRepository.find();
  }

  findOne(id: number): Promise<VideoGame> {
    return this.videoGamesRepository.findOne({ where: { id } });
  }

  create(createVideoGameDto: CreateVideoGameDto): Promise<VideoGame> {
    const newVideoGame = this.videoGamesRepository.create({
      ...createVideoGameDto,
      releaseDate: new Date(createVideoGameDto.releaseDate)
    });
    return this.videoGamesRepository.save(newVideoGame);
  }

  async update(id: number, updateVideoGameDto: UpdateVideoGameDto): Promise<VideoGame> {
    await this.videoGamesRepository.update(id, updateVideoGameDto);
    return this.videoGamesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.videoGamesRepository.delete(id);
  }
}
