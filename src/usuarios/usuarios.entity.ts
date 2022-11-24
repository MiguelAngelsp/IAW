import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class usuariosEntity {

    @PrimaryGeneratedColumn("uuid")
    UsuarioID: number;

    @Column('numeric',{
        unique: true
    })
    PerfilID: number;

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
    Apellidos: string;

    @Column('text',{
        nullable: true
    })
    Direccion: string;

    @Column('date',{
        nullable: true
    })
    Fecha_nacimiento: Date;

    @Column('text',{
        nullable: true
    })
    Tarjeta_banco: string;

    constructor(UsuarioID: number,PerfilID: number, DNI: string, Nombre: string, Apellidos: string, Direccion:string, Fecha_nacimiento: Date, Tarjeta_banco: string) {
        this.UsuarioID = UsuarioID;
        this.PerfilID = PerfilID;
        this.DNI = DNI;
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Direccion = Direccion;
        this.Fecha_nacimiento = Fecha_nacimiento;
        this.Tarjeta_banco = Tarjeta_banco;
        console.log('Creo la entidad usuarios para ' + this.Nombre);
    }

}