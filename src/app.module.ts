import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ValoracionesModule } from './valoraciones/valoraciones.module';
import { GenerosModule } from './generos/generos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CestaModule } from './cesta/cesta.module';

@Module({
  imports: [ ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    }),
    UsuariosModule, PeliculasModule, ValoracionesModule, GenerosModule, CestaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
