import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosDto } from '../dto/usuarios.dto';
import { UsuariosService } from '../service/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    usuarios: any;
    constructor(private UsuariosService: UsuariosService) { }

    @Post('/')
    create(@Body() usuario: UsuariosDto): Promise<UsuariosDto>{
        return this.UsuariosService.create(usuario);
    }

    @Get('/')
    findAll(): UsuariosDto[] {
        return this.UsuariosService.findAll();
    }

    @Put(':ID')
    update(@Param('ID') ID: number, @Body() payload: UsuariosDto) {
        return this.UsuariosService.update(+ID, payload);
    }

    @Delete(':ID')
    remove(@Param('ID') ID: number) {
      return this.UsuariosService.remove(+ID);
    }
}

