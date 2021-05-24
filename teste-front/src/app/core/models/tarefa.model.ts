import { Convidado } from './convidado.model';
import { Local } from './local.model';

export interface Tarefa {
    id?: number
    nome: string
    dataHora: Date
    duracao: Date
    local?: Local
    convidados?: Array<Convidado>
}