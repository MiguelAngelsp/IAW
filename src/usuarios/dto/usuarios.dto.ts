import { IsDate, IsNumber, IsString, MaxLength } from "class-validator";

export class UsuariosDto {
    @IsNumber()
    UsuarioID: number;

    @IsNumber()
    PerfilID: number;
    
    @IsString()
    @MaxLength(9)
    DNI: string;

    @IsString()
    @MaxLength(15)
    Nombre: string;

    @IsString()
    @MaxLength(20)
    Apellidos: string;

    @IsString()
    @MaxLength(50)
    Direccion: string;

    @IsDate()
    Fecha_nacimiento: Date;

    @IsString()
    @MaxLength(18)
    Tarjeta_banco: string;
}


