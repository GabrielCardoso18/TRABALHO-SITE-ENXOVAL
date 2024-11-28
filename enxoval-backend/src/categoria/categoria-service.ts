import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria-enity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private repository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Categoria> {
    return this.repository.findOneBy({ id: id });
  }

  save(categoria: Categoria): Promise<Categoria> {
    return this.repository.save(categoria);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
