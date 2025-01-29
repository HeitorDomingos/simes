import { DadosColetadosDiariaPA } from "./DadosColetadosDiariaPA";

export class ContagemMensalPA {
  iD: string;
  registro: string;
  idCentro: string;
  idDeposito: string;
  contador: string;
  area: string;
  nivel: number;
  descricao: string;
  idTipoStatus: number;
  lDadosColetadosMensalPA: DadosColetadosDiariaPA[];
}