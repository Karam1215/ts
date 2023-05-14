import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Goods } from './entity/goods.entity';



@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  findAll() {
    return this.goodsService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.goodsService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updateGood: Goods) {
    return this.goodsService.update(+id, updateGood);
  }

  @Post()
  create(@Body() createGood: Goods) {
    return this.goodsService.create();
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.goodsService.remove(+id);
}
}

