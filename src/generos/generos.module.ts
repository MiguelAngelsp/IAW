import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerosController } from './controller/generos.controller';
import { generosEntity } from './generos.entity';
import { GenerosService } from './service/generos.service';
@Module({
  imports: [TypeOrmModule.forFeature([generosEntity])],
  controllers: [GenerosController],
  providers: [GenerosService]
})
export class GenerosModule {}
