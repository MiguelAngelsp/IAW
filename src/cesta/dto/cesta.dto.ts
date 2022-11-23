import {IsNumber} from "class-validator";

export class cestaDto {
    @IsNumber()
    ID: number;

    @IsNumber()
    UsuarioID: number;
    
    @IsNumber()
    PeliculaID: number;
}