import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValoracionesController } from './controller/valoraciones.controller';
import { ValoracionesService } from './service/valoraciones.service';
import { valoracionesEntity } from './valoraciones.entity';
@Module({
  imports: [TypeOrmModule.forFeature([valoracionesEntity])],
  controllers: [ValoracionesController],
  providers: [ValoracionesService]
})
export class ValoracionesModule {}
