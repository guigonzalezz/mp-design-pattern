import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phrase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  oldPhrase: string;

  @Column()
  newPhrase: string;
}