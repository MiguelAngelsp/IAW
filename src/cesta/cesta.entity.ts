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

    @Column('date',{
        unique: true
    })
    Fecha_compra: Date;

    constructor(ID: number, UsuarioID: number, PeliculaID:number, Fecha_compra:Date) {
        this.ID = ID;
        this.UsuarioID = UsuarioID;
        this.PeliculaID = PeliculaID;
        this.Fecha_compra = Fecha_compra;
        console.log('Creo la entidad cesta para ' + this.ID);
    }

}