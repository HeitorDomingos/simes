import { DadosColetadosDiariaPA } from "./DadosColetadosDiariaPA";

export class ContagemDiariaPA {
  iD: string;
  registro: string;
  idCentro: string;
  idDeposito: string;
  idDepositoDestino: string;
  contador: string;
  idTipoColetaDados: number;
  area: string;
  nivel: number;
  descricao: string;
  idTipoStatus: number;
  idOrdemContagem: number;
  lDadosColetadosDiaria: DadosColetadosDiariaPA[];
}
