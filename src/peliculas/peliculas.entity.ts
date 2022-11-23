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
    Genero: string;

    @Column('text',{
        nullable: true
    })
    Descripcion: string;

    @Column('text',{
        nullable: true
    })
    Comentario: string;

    constructor(PeliculaID: number, Titulo: string, Genero: string, Descripcion: string, Comentario:string) {
        this.PeliculaID = PeliculaID;
        this.Titulo = Titulo;
        this.Genero = Genero;
        this.Descripcion = Descripcion;
        this.Comentario = Comentario;
        console.log('Creo la entidad pelicula para ' + this.Titulo);
    }

}