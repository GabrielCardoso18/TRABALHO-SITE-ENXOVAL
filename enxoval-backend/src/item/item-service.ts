import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item-enity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categoria } from 'src/categoria/categoria-enity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private repository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Item> {
    return this.repository.findOneBy({ id: id });
  }

  findByCategoria(categoria: Categoria): Promise<Item[]> {
    return this.repository.find({
      where: {
        vendido: false,
        categoria: {
          id: categoria.id,
        },
      },
    });
  }

  save(item: Item): Promise<Item> {
    return this.repository.save(item);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
