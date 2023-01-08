import { compare } from 'bcrypt';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Address } from './Address.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly userUuid?: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ length: 150 })
  password: string;

  @OneToOne(() => Address, (address) => address.user, { eager: true })
  @JoinColumn()
  address: Address;

  comparePassword = async (pass: string): Promise<boolean> => {
    return await compare(pass, this.password);
  };
}
