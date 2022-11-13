import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class UsuariosDto {
    @IsNumber()
    ID: number;
    
    @IsString()
    @MaxLength(9)
    DNI: number;

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


