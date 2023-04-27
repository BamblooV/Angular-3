import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

}