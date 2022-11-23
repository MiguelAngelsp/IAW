import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class usuariosEntity {

    @PrimaryGeneratedColumn("uuid")
    UsuarioID: number;

    @Column('text',{
        unique: true
    })
    DNI: string;

    @Column('text',{
        nullable: true
    })
    Nombre: string;

    @Column('text',{
        nullable: true
    })
    Apellido: string;

    @Column('text',{
        nullable: true
    })
    Correo: string;

    constructor(UsuarioID: number, DNI: string, Nombre: string, Apellido: string, Correo:string) {
        this.UsuarioID = UsuarioID;
        this.DNI = DNI;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Correo = Correo;
        console.log('Creo la entidad usuarios para ' + this.Nombre);
    }

}