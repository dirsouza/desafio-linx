import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from "./Product";

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'url',
    nullable: false,
    comment: 'Url da imagem',
  })
  url: string;

  @Column('boolean', {
    name: 'default',
    nullable: false,
    default: false,
    comment: 'Imagem principal',
  })
  default: boolean;

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

  @ManyToOne(() => Product, (product) => product.images, {
    nullable: false,
  })
  product?: Product;
}
