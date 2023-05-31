import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from './sellers.entity';

@Injectable()
export class SellersService {
  constructor(
    @InjectRepository(Seller)
    private readonly sellerRepository: Repository<Seller>,
  ) {}

  async findAll(): Promise<Seller[]> {
    return this.sellerRepository.find();
  }

  async findOne(id: number): Promise<Seller> {
    return this.sellerRepository.findOne({where: {id}});
  }

  async create(seller: Seller): Promise<Seller> {
    return this.sellerRepository.save(seller);
  }

  async update(id: number, seller: Seller): Promise<Seller> {
    await this.sellerRepository.update(id, seller);
    return this.sellerRepository.findOne({where: {id}});
  }

  async remove(id: number): Promise<void> {
    await this.sellerRepository.delete(id);
  }
}
