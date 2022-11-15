import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenerosDto } from '../dto/generos.dto';
import { GenerosService } from '../service/generos.service';

@Controller('generos')
export class GenerosController {
    constructor(private GenerosService: GenerosService) { }

    @Post('/')
    create(@Body() generos: GenerosDto): GenerosDto {
        return this.GenerosService.create(generos);
    }

    @Get('/')
    findAll(): GenerosDto[] {
        return this.GenerosService.findAll();
    }

    @Put(':GeneroID')
    update(@Param('GeneroID') GeneroID: number, @Body() payload: GenerosDto) {
        return this.GenerosService.update(+GeneroID, payload);
    }

    @Delete(':GeneroID')
    remove(@Param('GeneroID') GeneroID: number) {
      return this.GenerosService.remove(+GeneroID);
    }
}
