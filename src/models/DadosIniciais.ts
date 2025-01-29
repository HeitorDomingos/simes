import { Product } from "./Product";
export class DadosIniciais {
  registro: string;
  idCentro: string;
  idDeposito: string;
  area: string;
  nivel: string;
  sistema: string;
  tipoContagem: string;
  tipoStatusAtendimento: string;
  tipoStatusContagem: string;
  contagemCega: string;
  foraDaCurva: string;
  contagemFechada: string;
  contador: string;
  descricao: string;
  tipo: string;
  contado: boolean
  lstProduto: Product[];
  msg: string;
  tema: string;
  Usuario: string;
  
}



 

export type IDadosIniciaisObject = DadosIniciais & Realm.Object;
