
import { Client } from 'src/clients/entity/clients.entity';
import { Goods } from 'src/goods/entity/goods.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn ,OneToMany } from 'typeorm';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  order_id: number;

  @ManyToOne(() => Client)
  client: Client;


  @Column()
  serviceName: string;

  @Column()
  price: number;

  @Column()
  prodName: string;
  @ManyToOne(() => Client, (client) => client.orders)
  clients: Client;

  @OneToMany(() => Goods, (goods) => goods.order)
  goods: Goods[];

}


