import {IsDate, IsNumber} from "class-validator";

export class cestaDto {
    @IsNumber()
    ID: number;

    @IsNumber()
    UsuarioID: number;
    
    @IsNumber()
    PeliculaID: number;

    @IsDate()
    Fecha_compra: Date;
}