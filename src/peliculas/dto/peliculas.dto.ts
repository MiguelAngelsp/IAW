import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class PeliculasDto {
    @IsNumber()
    PeliculaID: number;
    
    @IsString()
    @MaxLength(60)
    Titulo: string;

    @IsString()
    @MaxLength(15)
    Genero: string;

    @IsString()
    @MaxLength(80)
    Descripcion: string;

    @IsString()
    @MaxLength(100)
    Comentario: string;
}