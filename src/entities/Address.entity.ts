import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  readonly addressUuid?: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 100 })
  street: string;

  @Column({ length: 10, type: 'int' })
  houseNumber: number;

  @Column({ length: 10 })
  zipCode: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}
