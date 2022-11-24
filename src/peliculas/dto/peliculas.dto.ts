import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class PeliculasDto {
    @IsNumber()
    PeliculaID: number;
    
    @IsString()
    @MaxLength(60)
    Titulo: string;

    @IsNumber()
    GeneroID: number;

    @IsString()
    @MaxLength(80)
    Descripcion: string;

    @IsNumber()
    ValoracionID: number;
}