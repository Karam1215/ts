import { OrdersService } from './orders.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrderDto } from 'src/orders/order.DTO';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.ordersService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updateOrder: Order) {
    return this.ordersService.update(+id, updateOrder);
  }

  @Post()
  create(@Body() createOrderDto: OrderDto) {
    return this.ordersService.create(createOrderDto);
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.ordersService.remove(+id);
}
}
