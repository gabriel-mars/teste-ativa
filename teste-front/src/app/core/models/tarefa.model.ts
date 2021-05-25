import { Convidado } from './convidado.model';
import { Local } from './local.model';

export interface Tarefa {
    id?: number
    nome: string
    dataHora?: string
    dataHoraAux?: Date
    duracao?: string
    local?: Local
    convidados?: Array<Convidado>
}