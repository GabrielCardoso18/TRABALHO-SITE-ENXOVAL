import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaService } from './categoria-service';
import { Categoria } from './categoria-enity';

@Controller('categorias')
export class CategoriaController {
  constructor(private service: CategoriaService) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(id: string): Promise<Categoria> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.service.save(categoria);
  }

  @Put()
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() categoria: Categoria,
  ): Promise<Categoria> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    categoria.id = found.id;

    return this.service.save(categoria);
  }
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}
