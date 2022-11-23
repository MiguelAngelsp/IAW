import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cestaEntity } from './cesta.entity';
import { CestaController } from './controller/cesta.controller';
import { cestaService } from './service/cesta.service';

@Module({
  imports: [TypeOrmModule.forFeature([cestaEntity])],
  controllers: [CestaController],
  providers: [cestaService]
})
export class CestaModule {}
