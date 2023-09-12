import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Workshop } from './Workshop';
import { Session } from './Session';

@Entity()
export class WorkshopRegistration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.workshopRegistrations)
  user: User;

  @ManyToOne(() => Workshop, (workshop) => workshop.registrations)
  workshop: Workshop;
}

@Entity()
export class SessionRegistration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sessionRegistrations)
  user: User;

  @ManyToOne(() => Session, (session) => session.registrations)
  session: Session;
}

