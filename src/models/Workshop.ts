import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Speaker } from './Speaker';
import { WorkshopRegistration } from './Registration';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  totalSeats: number;

  @OneToMany(() => WorkshopRegistration, (registration) => registration.workshop)
  registrations: WorkshopRegistration[];

  @OneToMany(() => Speaker, (speaker) => speaker.workshops)
  speaker: Speaker;
}

