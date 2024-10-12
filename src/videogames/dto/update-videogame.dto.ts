import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoGameDto } from './create-videogame.dto';

export class UpdateVideoGameDto extends PartialType(CreateVideoGameDto) {}