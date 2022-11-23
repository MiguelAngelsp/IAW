import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cesta')
export class cestaEntity {

    @PrimaryGeneratedColumn("uuid")
    ID: number;

    @Column('text',{
        unique: true
    })
    UsuarioID: number;

    @Column('text',{
        unique: true
    })
    PeliculaID: number;

    constructor(ID: number, UsuarioID: number, PeliculaID:number) {
        this.ID = ID;
        this.UsuarioID = UsuarioID;
        this.PeliculaID = PeliculaID;
        console.log('Creo la entidad cesta para ' + this.ID);
    }

}