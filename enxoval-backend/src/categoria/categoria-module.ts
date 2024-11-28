import { Module } from '@nestjs/common';
import { Categoria } from './categoria-enity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaService } from './categoria-service';
import { CategoriaController } from './categoria-controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
