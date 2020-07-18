import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { CategoryDto } from './category.dto';
import { Product } from '../product/product.entity';

@Entity('categories')
export class Category extends BaseEntity implements CategoryDto {
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
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => Product, (product) => product.categories, {
    nullable: false,
  })
  product: Product;
}
