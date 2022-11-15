import { Injectable, NotFoundException } from '@nestjs/common';
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

    async update(ID: number, cambios: UsuariosDto) {
        const usuarios = this.usuarios.find((usuarios) => usuarios.ID === ID);
        if (!usuarios) {
            throw new NotFoundException(`Usuario #${ID} no encontrado`);
        }

        const index = this.usuarios.findIndex((usuarios) => usuarios.ID === ID);
        this.usuarios[index] = {
            ...usuarios,
            ...cambios,
        };
        return this.usuarios[index];
    }

    async remove(ID: number) {
        const index = this.usuarios.findIndex((usuarios) => usuarios.ID === ID);
        if (index === -1) {
            throw new NotFoundException(`Usuario ${ID} no encontrado`);
        }
        this.usuarios.splice(index, 1);
        return true;
    }
}
