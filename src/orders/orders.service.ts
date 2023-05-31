import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';
import { OrderDto } from 'src/orders/order.DTO';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {ClientsService} from 'src/clients/clients.service'
import { Client } from 'src/clients/entity/clients.entity';


@Injectable()
export class OrdersService {
    constructor(private readonly datasourceService: DatasourceService,
        private readonly ClientsService: ClientsService,
        @InjectRepository(Order)
        private readonly orderRepository: Repository <Order>,
     ) {}

     async create(orderDto: OrderDto): Promise<Order> {
        const order = this.orderRepository.create();
        const Client = await this.ClientsService.findOne(orderDto.clientId);
        order.clients = Client;
        order.serviceName = orderDto.serviceName;  
        order.date = orderDto.date;
        order.price = orderDto.price;
        await this.orderRepository.save(order);
        return order;
    }


    findOne(id: number) {
        return this.datasourceService
            .getOrders()
            .find((order) => order.id === id);
        }
    
    async findAll(): Promise<Order[]> {
        const Client = await this.orderRepository.find({
          relations: {
            clients:true
          },
        });
        return Client;
      }

    update(id: number, updatedOrder: Order) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders()[index] = updatedOrder;
        return this.datasourceService.getOrders()[index];
        }

    remove(id: number) {
        this.orderRepository.delete(id);
        }
}