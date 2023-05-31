import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { Seller } from './sellers.entity';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get()
  findAll() {
    return this.sellersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellersService.findOne(+id);
  }

  @Post()
  create(@Body() createSeller: Seller) {
    return this.sellersService.create(createSeller);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSeller: Seller) {
    return this.sellersService.update(+id, updateSeller);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellersService.remove(+id);
  }
}
