import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  developer: string;

  @Column()
  publisher: string;

  @Column({ type: 'date' })
  releaseDate: Date;

  @Column('simple-array')
  platforms: string[];

  @Column()
  rating: string;
}
