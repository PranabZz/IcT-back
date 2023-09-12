import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Workshop } from './Workshop';
import { Session } from './Session';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Workshop, (workshop) => workshop.speaker)
  workshops: Workshop[];

  @ManyToOne(() => Session, (session) => session.speaker)
  sessions: Session[];
}

