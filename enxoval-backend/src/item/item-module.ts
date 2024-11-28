import { Module } from '@nestjs/common';
import { Item } from './item-enity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/categoria-enity';
import { ItemService } from './item-service';
import { ItemController } from './item-controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, Item])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
