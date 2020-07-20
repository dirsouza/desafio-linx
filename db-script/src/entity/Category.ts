import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from "./Product";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Nome da categoria',
  })
  name: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt?: Date;

  @ManyToOne(() => Product, (product) => product.categories, {
    nullable: false,
  })
  product?: Product;
}
