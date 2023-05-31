import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import {Goods} from './entity/goods.entity'


@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Goods, Order]),],
})
export class GoodsModule {}