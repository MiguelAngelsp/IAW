import { Body, Controller, Get, Post } from '@nestjs/common';
import { PeliculasDto } from '../dto/peliculas.dto';
import { PeliculasService } from '../service/peliculas.service';

@Controller('peliculas')
export class PeliculasController {
    constructor (private PeliculasService: PeliculasService) {}

    @Post('/')
    create(@Body() pelicula: PeliculasDto): PeliculasDto {
        return this.PeliculasService.create(pelicula);
    }

    @Get('/')
    findAll(): PeliculasDto[] {
        return this.PeliculasService.findAll();
    }
}
