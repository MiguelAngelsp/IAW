import { IsNumber, IsString, MaxLength } from "class-validator";

export class GenerosDto {
    @IsNumber()
    GeneroID: number;
    
    @IsString()
    @MaxLength(20)
    Genero: string;
}
