import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class UsuariosDto {
    @IsNumber()
    UsuarioID: number;
    
    @IsString()
    @MaxLength(9)
    DNI: string;

    @IsString()
    @MaxLength(15)
    Nombre: string;

    @IsString()
    @MaxLength(20)
    Apellidos: string;

    @IsEmail()
    @MaxLength(20)
    Correo: string;
}


