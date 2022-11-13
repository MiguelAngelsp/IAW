import { Injectable } from '@nestjs/common';
import { PeliculasDto } from 'src/peliculas/dto/peliculas.dto';

@Injectable()
export class PeliculasService {
    public peliculas: PeliculasDto[] = [];

    create(peliculas: PeliculasDto): PeliculasDto {
        this.peliculas.push(peliculas);
        return peliculas;
    }

    findAll(): PeliculasDto[] {
        return this.peliculas;
    }
}
