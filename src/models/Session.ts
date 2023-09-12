import { Entity, PrimaryGeneratedColumn ,OneToMany ,Column, ManyToOne } from 'typeorm';
import { Speaker } from './Speaker';
import { SessionRegistration } from './Registration';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  startTime: Date;

  @ManyToOne(() => Speaker, (speaker) => speaker.sessions)
  speaker: Speaker;
  
  @ManyToOne(() => SessionRegistration, (registration) => registration.session )
  registrations: SessionRegistration[];
}

