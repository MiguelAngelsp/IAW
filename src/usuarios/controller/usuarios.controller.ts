import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosDto } from '../dto/usuarios.dto';
import { UsuariosService } from '../service/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor (private UsuariosService: UsuariosService) {}

    @Post('/')
    create(@Body() usuario: UsuariosDto): UsuariosDto {
        return this.UsuariosService.create(usuario);
    }

    @Get('/')
    findAll(): UsuariosDto[] {
        return this.UsuariosService.findAll();
    }
}
