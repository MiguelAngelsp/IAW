import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('generos')
export class generosEntity {

    @PrimaryGeneratedColumn("uuid")
    GeneroID: number;

    @Column('text',{
        unique: true
    })
    Genero: string;

    constructor(GeneroID: number, Genero: string) {
        this.GeneroID = GeneroID;
        this.Genero = Genero;
        console.log('Creo la entidad genero para ' + this.Genero);
    }

}