import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './sellers.entity';
import { Order } from 'src/orders/entities/order.entity';

@Module({
  controllers: [SellersController],
  providers: [SellersService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Seller, Order])],
  
})
export class SellersModule {}
