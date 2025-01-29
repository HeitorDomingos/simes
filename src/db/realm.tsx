// realm/realm.js

import Realm from "realm";
import { DadosIniciaisSchema } from "./schemas/DadosIniciaisSchema";
import { ProductSchema } from "./schemas/ProductSchema";
import { ProductEquipamentoSchema } from "./schemas/ProductEquipamentoSchema";
import { ProductEquipamentoCABSchema } from "./schemas/ProductEquipamentoCABSchema";

let realmInstance: Realm | undefined;

export const getRealm = async () => {
  if (realmInstance === undefined) {
    realmInstance = await Realm.open({
      // path: "cardList.realm",
      path: "simes.realm",
      schema: [DadosIniciaisSchema, ProductSchema, ProductEquipamentoSchema, ProductEquipamentoCABSchema],
      schemaVersion: 1, // Atualize a versão conforme necessário
    });
  }
  return realmInstance;
};

export const addInitialData = async () => {
  const realm = await getRealm();

  // Verifica se já existem itens no banco
  if (realm.objects("Item").length === 0) {
    realm.write(() => {
      realm.create("Item", {
        id: "1",
        name: "Item 1",
        image: "https://via.placeholder.com/150",
      });
      realm.create("Item", {
        id: "2",
        name: "Item 2",
        image: "https://via.placeholder.com/150",
      });
      realm.create("Item", {
        id: "3",
        name: "Item 3",
        image: "https://via.placeholder.com/150",
      });
      realm.create("Item", {
        id: "4",
        name: "Item 4",
        image: "https://via.placeholder.com/150",
      });
      realm.create("Item", {
        id: "5",
        name: "Item 5",
        image: "https://via.placeholder.com/150",
      });
      realm.create("Item", {
        id: "6",
        name: "Item 6",
        image: "https://via.placeholder.com/150",
      });
    });
  }
};

export const getAllItems = async () => {
  const realm = await getRealm();
  return Array.from(realm.objects("Item"));
};

// Adicione outras operações CRUD conforme necessário
