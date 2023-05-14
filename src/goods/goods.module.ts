import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';


@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [DatasourceModule],
})
export class GoodsModule {}