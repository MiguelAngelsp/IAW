import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosDto } from 'src/usuarios/dto/usuarios.dto';
import { Repository } from 'typeorm';
import { usuariosEntity } from '../usuarios.entity';
@Injectable()
export class UsuariosService {
    public usuarios: UsuariosDto[] = [];

    constructor(
        @InjectRepository(usuariosEntity)
        private usuariosRepository: Repository<usuariosEntity>
    ) {}

    create(usuarios: UsuariosDto): Promise<UsuariosDto> {
        return this.usuariosRepository.save(usuarios);
    }

    findAll(): UsuariosDto[] {
        return this.usuarios;
    }

    async update(ID: number, cambios: UsuariosDto) {
        const usuarios = this.usuarios.find((usuarios) => usuarios.UsuarioID === ID);
        if (!usuarios) {
            throw new NotFoundException(`Usuario #${ID} no encontrado`);
        }

        const index = this.usuarios.findIndex((usuarios) => usuarios.UsuarioID === ID);
        this.usuarios[index] = {
            ...usuarios,
            ...cambios,
        };
        return this.usuarios[index];
    }

    async remove(ID: number) {
        const index = this.usuarios.findIndex((usuarios) => usuarios.UsuarioID === ID);
        if (index === -1) {
            throw new NotFoundException(`Usuario ${ID} no encontrado`);
        }
        this.usuarios.splice(index, 1);
        return true;
    }
}
