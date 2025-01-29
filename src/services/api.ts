import axios from "axios";
//https://apiestoquesegurodev.solarbr.com.br/swagger/ui/index
export const apiBase = axios.create({
  baseURL: "https://apiestoquesegurodev.solarbr.com.br/api/EstoqueSeguro/", // Substitua pela sua URL base
  timeout: 5000, // Tempo limite para as requisições
  headers: {
    "Content-Type": "application/json",
  },
});
export const apiFuncionario = axios.create({
  baseURL: "https://wsfuncionario.solarbr.com.br/api/Funcionario/", // Substitua pela sua URL base
  timeout: 5000, // Tempo limite para as requisições
  headers: {
    "Content-Type": "application/json",
  },
});



