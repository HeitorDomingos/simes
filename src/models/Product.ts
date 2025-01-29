export class Product {
  CodigoProduto: string;
  Categoria: string;
  CodigoBarras: string;
  Nome: string;
  Unidade: string;
  Localizacao: string;
  EstoqueInicial: string;
  EstoqueEmControleQM: string;
  EstoqueBloqueado: string;
  Devolucao: string;
  Contagem: number;
  Contado: boolean;
  QpdeItensCaixa: string;
  QpdeItensPallet: string;
  QpdeItensCamada: string;
  DocInventario: string;
  Sincroizado: boolean;
}

export type IProductObject = Product & Realm.Object;
