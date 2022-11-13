import { Module } from '@nestjs/common';
import { ValoracionesController } from './controller/valoraciones.controller';
import { ValoracionesService } from './service/valoraciones.service';

@Module({
  controllers: [ValoracionesController],
  providers: [ValoracionesService]
})
export class ValoracionesModule {}
