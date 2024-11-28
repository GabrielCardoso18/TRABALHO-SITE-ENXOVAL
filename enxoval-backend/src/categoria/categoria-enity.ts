import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  descricao: string;
}
