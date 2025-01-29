import { ProdutoEquipamentoCAB } from "../models/ProdutoEquipamento";
import {apiBase} from "./api";
import { handleRequestError } from "./auth";

export const obterProdutoEquipamento = async (
  username: string,
): Promise<ProdutoEquipamentoCAB> => {
  try {
    const response = await apiBase.get(
      "ObterProdutosEquipamentos?IdUsuario="+username
    );    
    console.log(response.data)
    return response.data[0];
  } catch (error: any) {
    return handleRequestError(error);
  }
};
export const enviarContagem = async (
  produtoEquipamentoCAB: ProdutoEquipamentoCAB
): Promise<any> => {
  try {
 
    const response = await apiBase.post(
      "/EnviarContagem", produtoEquipamentoCAB
    );
    console.log(response.data)
    return response.data;
    
  } catch (error: any) {
    console.log(error)
    return handleRequestError(error);
  }
};



