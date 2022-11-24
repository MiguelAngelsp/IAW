import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('peliculas')
export class peliculasEntity {

    @PrimaryGeneratedColumn("uuid")
    PeliculaID: number;

    @Column('text',{
        unique: true
    })
    Titulo: string;

    @Column('text',{
        nullable: true
    })
    GeneroID: string;

    @Column('text',{
        nullable: true
    })
    Descripcion: string;

    @Column('numeric',{
        unique: true
    })
    ValoracionID: number;

    constructor(PeliculaID: number, Titulo: string, GeneroID: string, Descripcion: string, ValoracionID: number) {
        this.PeliculaID = PeliculaID;
        this.Titulo = Titulo;
        this.GeneroID = GeneroID;
        this.Descripcion = Descripcion;
        this.ValoracionID= ValoracionID;
        console.log('Creo la entidad pelicula para ' + this.Titulo);
    }

}