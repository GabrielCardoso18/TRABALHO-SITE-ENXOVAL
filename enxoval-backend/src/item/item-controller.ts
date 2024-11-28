import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Item } from './item-enity';
import { ItemService } from './item-service';
import { Categoria } from 'src/categoria/categoria-enity';

@Controller('itens')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  findAll(@Query('categoriaId') categoriaId?: string): Promise<Item[]> {
    if (categoriaId) {
      return this.service.findByCategoria({
        id: categoriaId,
      } as Categoria);
    }
    return this.service.findAll();
  }

  @Get(':id')
  async fundById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Item> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() item: Item): Promise<Item> {
    return this.service.save(item);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() item: Item,
  ): Promise<Item> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('movie not found', HttpStatus.NOT_FOUND);
    }

    item.id = found.id;

    return this.service.save(item);
  }
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('movie not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}
