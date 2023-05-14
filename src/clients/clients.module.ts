import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './entity/clients.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [DatasourceModule,
    TypeOrmModule.forFeature([Client,/*hon 5ra */]),],
})
export class ClientsModule {}
