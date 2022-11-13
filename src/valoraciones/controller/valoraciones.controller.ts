import { Body, Controller, Get, Post } from '@nestjs/common';
import { ValoracionesDto } from '../dto/valoraciones.dto';
import { ValoracionesService } from '../service/valoraciones.service'

@Controller('valoraciones')
export class ValoracionesController {
    constructor(private ValoracionesService: ValoracionesService) { }

    @Post('/')
    create(@Body() valoracion: ValoracionesDto): ValoracionesDto {
        return this.ValoracionesService.create(valoracion);
    }

    @Get('/')
    findAll(): ValoracionesDto[] {
        return this.ValoracionesService.findAll();
    }
}
