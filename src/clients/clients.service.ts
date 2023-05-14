
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entity/clients.entity';
import { CreateClientDto } from "./DTO/CreateClientDto";
import { IncompleteCLientDto } from './DTO/IncompleteCLientDto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(clientdto: CreateClientDto): Promise<Client> {
    const client = this.clientRepository.create();
    client.fullname = clientdto.fullname;
    await this.clientRepository.save(client);
    return client;
  }

  findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne({
      where: { id }
     
    });
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.clientRepository.find({
      relations: {
 
      },
    });
    return clients;
  }

  async findIncomplete(): Promise<IncompleteCLientDto[]> {
    const clients = await this.clientRepository.find();
    const incompleteClients: IncompleteCLientDto[] = clients.map((client) => {
      const incompleteClients = new IncompleteCLientDto();
      incompleteClients.id = client.id;
      return incompleteClients;
    });
    return incompleteClients;
  }

  async update(id: number, updateClient: Client) {
    const client = await this.clientRepository.findOne({ where: { id } });
    client.fullname = updateClient.fullname;
    await this.clientRepository.save(client);
    return client;
  }

  remove(id: number) {
    this.clientRepository.delete({ id });
  }
}
