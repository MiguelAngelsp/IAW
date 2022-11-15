import { Module } from '@nestjs/common';
import { GenerosController } from './controller/generos.controller';
import { GenerosService } from './service/generos.service';

@Module({
  controllers: [GenerosController],
  providers: [GenerosService]
})
export class GenerosModule {}
