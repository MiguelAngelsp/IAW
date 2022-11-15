import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ValoracionesModule } from './valoraciones/valoraciones.module';
import { GenerosModule } from './generos/generos.module';

@Module({
  imports: [UsuariosModule, PeliculasModule, ValoracionesModule, GenerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
