import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './entity/clients.entity';
import { CreateClientDto } from './DTO/CreateClientDto';


@Controller('client')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}


  @Get()
  findAll() {
    return this.clientsService.findAll();
    
  }


    @Get(':id')
findOne(@Param('id') id: string) {
  return this.clientsService.findOne(+id);
}

@Put(':id')
  update(@Param('id') id: string, @Body() updateClient: Client) {
    return this.clientsService.update(+id, updateClient);
  }

  @Post()
  create(@Body() CreateClient: Client) {
    return this.clientsService.create(CreateClient);
  }


@Delete(':id')
remove(@Param('id') id: string) {
  return this.clientsService.remove(+id);
}
}

