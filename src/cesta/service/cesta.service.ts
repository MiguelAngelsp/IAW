import { Injectable} from '@nestjs/common';
import { cestaDto } from '../dto/cesta.dto';

@Injectable()
export class cestaService {
    public UsuarioID: cestaDto[] = [];
    public PeliculaID: cestaDto[] = [];
    create(UsuarioID: cestaDto): cestaDto {
        this.UsuarioID.push(UsuarioID);
        return UsuarioID;
    }

    findAll(): cestaDto[] {
        return this.PeliculaID;
    }
}
