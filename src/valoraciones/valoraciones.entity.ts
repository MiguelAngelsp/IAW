import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('valoraciones')
export class valoracionesEntity {

    @PrimaryGeneratedColumn("uuid")
    ValoracionID: number;

    @Column('text',{
        unique: true
    })
    Titulo_pelicula: string;

    @Column('text',{
        nullable: true
    })
    Puntuacion: number;

    @Column('text',{
        nullable: true
    })
    Comentario: string;

    @Column('text',{
        nullable: true
    })
    UsuarioID: number;

    constructor(ValoracionID: number, Titulo_pelicula: string, Puntuacion: number, Comentario: string, UsuarioID:number) {
        this.ValoracionID = ValoracionID;
        this.Titulo_pelicula = Titulo_pelicula;
        this.Puntuacion = Puntuacion;
        this.Comentario = Comentario;
        this.UsuarioID = UsuarioID;
        console.log('Creo la entidad valoracion para ' + this.Titulo_pelicula);
    }

}