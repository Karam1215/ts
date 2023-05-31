import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  ManyToOne
} from 'typeorm';

@Entity('goods') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
@Unique(['id'])
export class Goods {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  
  @ManyToOne(() => Order, (order) => order.goods)
  order: Order;

}
