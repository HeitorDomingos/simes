import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Alert,
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Mensal from "../../assets/bottleblack512.png";
import Diaria from "../../assets/bottlered512.png";
import { AlertTitle } from "../../enums/AlertTitle";
import { SubMainOption } from "../../enums/SubMainOption";
import { DadosIniciais } from "../../models/DadosIniciais";
import { ItemSubMenu } from "../../models/ItemMenuPrincipal";
import { obterProdutoEquipamento } from "../../services/contagem";
import { styles } from "../main/styles";

export default function Contagens() {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const props  = route.params as DadosIniciais;
  const data: ItemSubMenu[] = [
    { id: "1", name: SubMainOption.MENSAL, image: Mensal },
    { id: "2", name: SubMainOption.DIARIO, image: Diaria },
  ];
  useEffect(() => {

    console.log("[TELA CONTAGENS] props ", props);

  }, []);

  async function handlePress(item: ItemSubMenu) {
    try {
      const response = await obterProdutoEquipamento(props.Usuario);
      if (response) {
        console.log('response - obterProdutoEquipamento: ' , response);
        if (response.msg != null && response.msg != "") {
          Alert.alert("Atenção!", response.msg);
        } else {
          return navigation.navigate("ContarProduto", response);
        }
        
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(AlertTitle.ERROR, error.message);
      // throw new Error(error || "Falha no Login");
    }

    if (item.name == SubMainOption.MENSAL) navigation.navigate("ContarProduto");

    // Alert.alert("Item Selecionado", `Você clicou em: ${item.name}`);
    console.log(`Item selecionado: ${item.name}`);
  }
 

  const renderItem = ({ item }: { item: ItemSubMenu }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={item.image as ImageSourcePropType} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Exibir em 2 colunas
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper} // Estilo para a linha de colunas
      />
    </View>
  );
}
