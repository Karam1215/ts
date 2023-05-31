
import { Client } from 'src/clients/entity/clients.entity';
import { Goods } from 'src/goods/entity/goods.entity';
import { Seller } from 'src/sellers/sellers.entity';
import { Entity, Column, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, JoinColumn ,OneToMany } from 'typeorm';


@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  order_id: number;

  @ManyToOne(() => Client, (client) => client.orders)
  @JoinColumn({name: "clientId", referencedColumnName: 'id' })
  clients: Client;

  @Column()
  serviceName: string;

  @Column()
  price: number;
  @Column()
  date: Date;


  @OneToMany(() => Goods, (goods) => goods.order)
  goods: Goods[];
  @ManyToOne(() => Seller, (seller) => seller.orders)
  seller: Seller;
    id: number;

}


