import axios, { AxiosError } from "axios";
import { DadosIniciais } from "../models/DadosIniciais";
import { apiBase } from "./api";

export const getLogin = async (
  username: string,
  password: string
): Promise<DadosIniciais> => {
  try {
    // const response = await api.get("/ValidarUsuario", { username, password });
    const response = await apiBase.get(
      "ValidarUsuario?IdUsuario=" + username + "&Senha=" + password
    );
    return response.data[0];
  } catch (error: any) {
    return handleRequestError(error);
  }
};

export const handleRequestError = (error: AxiosError): any => {
  // if (axios.isAxiosError(error)) {
  const axiosError = error as AxiosError;

  if (!axiosError.response) {
    // Erros de conexão ou timeout
    if (axiosError.code === "ECONNABORTED") {
      throw new Error(
        "A requisição demorou muito. Por favor, tente novamente mais tarde."
      );
    } else {
      throw new Error(
        "Sem conexão com a internet. Verifique sua conexão e tente novamente."
      );
    }
  } else {
    // Erros com respostas HTTP
    switch (axiosError.response.status) {
      case 404:
        throw new Error(
          "Dados não encontrados. Verifique se as informações estão corretas."
        );
        break;
      case 500:
        throw new Error(
          "Erro interno do servidor. Tente novamente mais tarde."
        );
        break;
      default:
        throw new Error("Ocorreu um erro inesperado. Tente novamente.");
        break;
    }
  }
  // } else {
  //   // Outros tipos de erros inesperados
  //   throw new Error('Ocorreu um erro desconhecido. Tente novamente.');
  // }

  // return null;
};
