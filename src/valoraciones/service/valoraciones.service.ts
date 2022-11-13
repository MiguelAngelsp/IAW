import { Injectable } from '@nestjs/common';
import { ValoracionesDto } from '../dto/valoraciones.dto';

@Injectable()
export class ValoracionesService {
    public valoraciones: ValoracionesDto[] = [];

    create(valoraciones: ValoracionesDto): ValoracionesDto {
        this.valoraciones.push(valoraciones);
        return valoraciones;
    }

    findAll(): ValoracionesDto[] {
        return this.valoraciones;
    }
}
