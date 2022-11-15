import { Injectable, NotFoundException } from '@nestjs/common';
import { GenerosDto } from 'src/generos/dto/generos.dto';

@Injectable()
export class GenerosService {
    public generos: GenerosDto[] = [];

    create(generos: GenerosDto): GenerosDto {
        this.generos.push(generos);
        return generos;
    }

    findAll(): GenerosDto[] {
        return this.generos;
    }

    async update(GeneroID: number, cambios: GenerosDto) {
        const generos = this.generos.find((generos) => generos.GeneroID === GeneroID);
        if (!generos) {
            throw new NotFoundException(`Genero #${GeneroID} no encontrado`);
        }

        const index = this.generos.findIndex((generos) => generos.GeneroID === GeneroID);
        this.generos[index] = {
            ...generos,
            ...cambios,
        };
        return this.generos[index];
    }

    async remove(GeneroID: number) {
        const index = this.generos.findIndex((generos) => generos.GeneroID === GeneroID);
        if (index === -1) {
            throw new NotFoundException(`Genero ${GeneroID} no encontrado`);
        }
        this.generos.splice(index, 1);
        return true;
    }
}
