import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity'
import { Client } from 'src/clients/entity/clients.entity';
import { Goods } from 'src/goods/entity/goods.entity';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Client, Goods, Order])],
})
export class OrdersModule {}
