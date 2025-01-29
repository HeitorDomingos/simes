import {ProdutoEquipamentoCAB } from "../models/ProdutoEquipamento";
import {apiFuncionario} from "./api";

export const obterFotoFuncionario = async (
  matricula: string
): Promise<ProdutoEquipamentoCAB> => {
  try {
 
    const response = await apiFuncionario.get(
      "/ConsultarFotoFuncLG?matricula="+ matricula
    );    
    console.log(response.data)
    return response.data;
  } catch (error: any) {
    console.log();
    throw new Error(error.response?.data?.message || "Falha ao obter foto do  Funcionário!");
  }
};