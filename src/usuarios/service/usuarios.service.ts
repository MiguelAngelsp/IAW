import { Injectable } from '@nestjs/common';
import { UsuariosDto } from 'src/usuarios/dto/usuarios.dto';

@Injectable()
export class UsuariosService {
    public usuarios: UsuariosDto[] = [];

    create(usuarios: UsuariosDto): UsuariosDto {
        this.usuarios.push(usuarios);
        return usuarios;
    }

    findAll(): UsuariosDto[] {
        return this.usuarios;
    }
}
