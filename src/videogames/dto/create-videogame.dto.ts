import { IsNotEmpty, IsString, IsArray, IsISO8601, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

enum Rating {
  E = 'E',
  E10 = 'E10+',
  T = 'T',
  M = 'M',
  AO = 'AO',
}

export class CreateVideoGameDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsString()
  developer: string;

  @IsNotEmpty()
  @IsString()
  publisher: string;

  @IsNotEmpty()
  @IsISO8601()
  releaseDate: string;

  @IsArray()
  @IsString({ each: true })
  platforms: string[];

  @IsNotEmpty()
  @IsEnum(Rating)
  rating: Rating;
}
