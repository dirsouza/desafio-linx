import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm";
import { ImageDto } from "../dto/image.dto";
import { Product } from "../../product/entity/product.entity";

@Entity('images')
export class Image extends BaseEntity implements ImageDto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'url',
    nullable: false,
    comment: 'Url da imagem'
  })
  url: string;

  @Column('boolean', {
    name: 'default',
    nullable: false,
    default: false,
    comment: 'Imagem principal'
  })
  default: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at'
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at'
  })
  updated_at: Date;

  @ManyToOne(() => Product, product => product.images, {
    nullable: false
  })
  product: Product;

}

