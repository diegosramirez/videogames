import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesService } from './videogames.service';

describe('VideoGamesService', () => {
  let service: VideoGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoGamesService],
    }).compile();

    service = module.get<VideoGamesService>(VideoGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of video games', () => {
      const result = service.findAll();
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('id');
      expect(result[0]).toHaveProperty('title');
      expect(result[0]).toHaveProperty('genre');
    });
  });
});
