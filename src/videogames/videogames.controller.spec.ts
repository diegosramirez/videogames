import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesController } from './videogames.controller';
import { VideoGamesService } from './videogames.service';

describe('VideoGamesController', () => {
  let controller: VideoGamesController;
  let service: VideoGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoGamesController],
      providers: [
        {
          provide: VideoGamesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { id: 1, title: 'Game 1', genre: 'Action' },
              { id: 2, title: 'Game 2', genre: 'RPG' },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<VideoGamesController>(VideoGamesController);
    service = module.get<VideoGamesService>(VideoGamesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of video games', async () => {
      const result = await controller.findAll();
      expect(result).toHaveLength(2);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
