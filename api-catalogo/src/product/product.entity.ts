import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Image } from '../image/image.entity';
import { ProductDto } from './product.dto';

@Entity('products')
export class Product extends BaseEntity implements ProductDto {
  @PrimaryColumn('varchar')
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Nome do produto',
  })
  name: string;

  @Column('text', {
    name: 'description',
    nullable: false,
    comment: 'Descrição do produto',
  })
  description: string;

  @Column('double', {
    name: 'price',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: 'Preço do produto',
  })
  price: number;

  @Column('double', {
    name: 'old_price',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: 'Preço anterior do produto',
  })
  oldPrice: number;

  @Column('varchar', {
    name: 'type',
    nullable: false,
    comment: 'Tipo do produto',
  })
  type: string;

  @Column('varchar', {
    name: 'brand',
    nullable: false,
    comment: 'Marca do produto',
  })
  brand: string;

  @Column('varchar', {
    name: 'status',
    nullable: false,
    comment: 'Status do produto',
  })
  status: string;

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

  @OneToMany(() => Category, (category) => category.product, {
    nullable: false,
  })
  categories: Category[];

  @OneToMany(() => Image, (image) => image.product, {
    nullable: false,
  })
  images: Image[];
}
