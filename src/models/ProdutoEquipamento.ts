export class ProdutoEquipamentoCAB {
  registro: string; //Padrão: dd/MM/yyyy
  idCentro: string; //ex: FFOR
  area: string;
  ano: string;
  mes: string;
  nivel: string;
  contador: string;
  tipoStatusContagem: string;
  lstProduto: ProdutoEquipamento[];
  msg: string;
}
export class ProdutoEquipamento {
  Tag: string;
  Descricao: string;
  Local: string;
  Dofi: string; // inicialmente virá  = 1
  Contado: string;
  DataHora: string;
}

export type IProdutoEquipamentoObject = ProdutoEquipamento & Realm.Object;
export type IProdutoEquipamentoCABObject = ProdutoEquipamentoCAB & Realm.Object;
