import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique
} from 'typeorm';


@Entity('clients') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
@Unique(['id'])
export class Client {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}