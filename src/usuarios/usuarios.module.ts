import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './controller/usuarios.controller';
import { UsuariosService } from './service/usuarios.service';
import { usuariosEntity } from './usuarios.entity';
@Module({
  imports: [TypeOrmModule.forFeature([usuariosEntity])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
