import { 
  Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { Goods } from './entity/goods.entity';


@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Goods)
    private readonly goodRepository: Repository<Goods>,
  ) {}

  async create(createGood: Goods): Promise<Goods> {
        const goods = this.goodRepository.create(createGood);
        return this.goodRepository.save(goods);
      }

  findOne(id: number): Promise<Goods> {
    return this.goodRepository.findOne({
      where: { id },
     
    });
  }

  async findAll(): Promise<Goods[]> {
    const goods = await this.goodRepository.find({
      relations: {
      },
    });
    return goods;
  }


  async update(id: number, updateGood: Goods) {
    const goods = await this.goodRepository.findOne({ where: { id } });
    goods.fullname = updateGood.fullname;
    await this.goodRepository.save(goods);
    return goods;
  }

  remove(id: number) {
    this.goodRepository.delete({ id });
  }
}