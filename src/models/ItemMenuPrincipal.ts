
import { MainOption } from "../enums/MainOption";
import { Perfil } from "../enums/Perfil";

export class ItemMenuPrincipal {
  id: string;
  name: string;
  image: string;
  isVisible: boolean;
  lstPerfil: Perfil[];
}
export class ItemSubMenu {
  id: string;
  name: string;
  image: string;
  // isVisible: boolean;
  // lstPerfil: Perfil[];
}

