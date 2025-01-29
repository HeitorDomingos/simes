import { ContagemDiariaPA } from "./ContagemDiariaPA";

//TODO: Verificar se o tipo de dado do atributo "dataHora" está correto pois no Xamarim era DateTimeOffset
export class DadosColetadosDiariaPA {
  id: string;
  registro: string;
  idCentro: string;
  idDeposito: string;
  idDepositoDestino: string;
  contador: string;
  localizacao: string;
  codigoProduto: string;
  idTipoContagem: string;
  area: string;
  nivel: string;
  idOrdemContagem: string;
  contagemDiariaPA: ContagemDiariaPA;
  categoria: string;
  codigoBarras: string;
  nome: string;
  unidade: string;
  contagem: number;
  dataHora: Date;    // Convertido de DateTimeOffset para Date
  sincroizado: boolean;
  docInventario: string;
  estoqueSap: string;
  estoqueInicial: string;
  estoqueBloqueado: string;
  estoqueEmControleQM: string;
  foraDaCurva: string;
}
