import { Body, Controller, Get, Post } from '@nestjs/common';
import { cestaDto } from '../dto/cesta.dto';
import { cestaService } from '../service/cesta.service';

@Controller('cesta')
export class CestaController {
    constructor (private cestaService: cestaService) {}

    @Post('/')
    create(@Body() cesta: cestaDto): cestaDto {
        return this.cestaService.create(cesta);
    }

    @Get('/')
    findAll(): cestaDto[] {
        return this.cestaService.findAll();
    }
}
