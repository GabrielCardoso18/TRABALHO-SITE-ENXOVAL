import { Categoria } from 'src/categoria/categoria-enity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  nome: string;

  @Column({ type: 'text', nullable: false })
  descricao: string;

  @Column({ nullable: false })
  foto: string;

  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  preco: number;

  @Column({ nullable: false })
  vendido: boolean;

  @ManyToMany(() => Categoria, { eager: true })
  @JoinTable({
    name: 'item_categoria',
  })
  categoria: Categoria;
}
