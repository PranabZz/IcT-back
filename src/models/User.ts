import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WorkshopRegistration, SessionRegistration } from './Registration';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => WorkshopRegistration, (registration) => registration.user)
  workshopRegistrations: WorkshopRegistration[];

  @OneToMany(() => SessionRegistration, (registration) => registration.user)
  sessionRegistrations: SessionRegistration[];
}

