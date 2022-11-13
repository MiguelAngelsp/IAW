import { Module } from '@nestjs/common';
import { PeliculasController } from './controller/peliculas.controller';
import { PeliculasService } from './service/peliculas.service';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
