import { ObjectSchema } from "realm";

export const DadosIniciaisSchema: ObjectSchema = {
    name: "DadosIniciais",
    primaryKey: "idCentro",
    properties: {
      registro: "string",
      idCentro: "string",
      idDeposito: "string",
      area: "string",
      nivel: "string",
      sistema: "string",
      tipoContagem: "string",
      tipoStatusAtendimento: "string",
      tipoStatusContagem: "string",
      contagemCega: "string",
      foraDaCurva: "string",
      contagemFechada: "string",
      contador: "string",
      descricao: "string",
      tipo: "string",
      contado: "bool",  
      lstProduto: "Product[]",
      msg: "string",
      tema: "string",

    },
  };

