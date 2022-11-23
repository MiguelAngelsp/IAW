import { IsNumber, IsString, MaxLength } from "class-validator";

export class ValoracionesDto {
    @IsNumber()
    ValoracionID: number;
    
    @IsString()
    @MaxLength(60)
    Titulo_pelicula: string;

    @IsNumber()
    @MaxLength(2)
    Puntuacion: number;

    @IsString()
    @MaxLength(100)
    Comentario: string;

    @IsString()
    @MaxLength(15)
    UsuarioID: number;
}
