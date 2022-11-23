import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasController } from './controller/peliculas.controller';
import { peliculasEntity } from './peliculas.entity';
import { PeliculasService } from './service/peliculas.service';
@Module({
  imports: [TypeOrmModule.forFeature([peliculasEntity])],
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
