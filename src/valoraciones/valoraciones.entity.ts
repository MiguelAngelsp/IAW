import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('valoraciones')
export class valoracionesEntity {

    @PrimaryGeneratedColumn("uuid")
    ValoracionID: number;

    @Column('numeric',{
        unique: true
    })
    PeliculaID: number;

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

    constructor(ValoracionID: number, PeliculaID: number, Puntuacion: number, Comentario: string, UsuarioID:number) {
        this.ValoracionID = ValoracionID;
        this.PeliculaID = PeliculaID;
        this.Puntuacion = Puntuacion;
        this.Comentario = Comentario;
        this.UsuarioID = UsuarioID;
        console.log('Creo la entidad valoracion para ' + this.ValoracionID);
    }

}