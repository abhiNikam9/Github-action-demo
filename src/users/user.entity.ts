import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  f_name: string;

  @Column()
  l_name: string;

  @Column()
  email: string;

  @Column()
  Mob_no: string;

  @Column()
  password: string;

}
