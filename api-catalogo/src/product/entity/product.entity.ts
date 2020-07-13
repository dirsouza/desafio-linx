import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Category } from "../../category/entity/category.entity";
import { Image } from "../../image/entity/image.entity";

@Entity('products')
export class Product {

  @PrimaryColumn('varchar')
  id: string;

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'Nome do produto'
  })
  name: string;

  @Column('text', {
    name: 'description',
    nullable: false,
    comment: 'Descrição do produto'
  })
  description: string;

  @Column('double', {
    name: 'price',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: 'Preço do produto'
  })
  price: number;

  @Column('double', {
    name: 'old_price',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: 'Preço anterior do produto'
  })
  oldPrice: number;

  @Column('varchar', {
    name: 'type',
    nullable: false,
    comment: 'Tipo do produto'
  })
  type: string;

  @Column('varchar', {
    name: 'brand',
    nullable: false,
    comment: 'Marca do produto'
  })
  brand: string;

  @Column('varchar', {
    name: 'status',
    nullable: false,
    comment: 'Status do produto'
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(type => Category, category => category.product, {
    cascade: true,
    onDelete: "CASCADE",
    nullable: false
  })
  categories: Category[];

  @OneToMany(type1 => Image, image => image.product, {
    cascade: true,
    onDelete: "CASCADE",
    nullable: false
  })
  images: Image[];

}
