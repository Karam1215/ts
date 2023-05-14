import { Injectable } from '@nestjs/common';
import { Client } from 'src/clients/entity/clients.entity';
import { Goods } from 'src/goods/entity/goods.entity';

import { Order } from 'src/orders/entities/order.entity'

@Injectable()
export class DatasourceService {
  private clients: Client[] = [];
  private goods: Goods[] = [];
  private orders: Order[] = [];

  getDoctors(): Client[] {
    return this.clients;
  }

  getPatients(): Goods[] {
    return this.goods;
  }


  getOrders(): Order[] {
    return this.orders;
  }

}
