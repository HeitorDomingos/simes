import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../main/styles";
import Contagem_img from "../../assets/qrcodescannerdarkred128.png";
import Transferencia_img from "../../assets/refreshred512.png";
import GerArmazen_img from "../../assets/warehousered512.png";
import AtendReserva_img from "../../assets/workerred512.png";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MainOption } from "../../enums/MainOption";
import { DadosIniciais } from "../../models/DadosIniciais";
import { ItemMenuPrincipal } from "../../models/ItemMenuPrincipal";
import { Perfil } from "../../enums/Perfil";

export default function Main() {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const props = route.params as DadosIniciais;
  const data: ItemMenuPrincipal[] = [
    {
      id: "1",
      name: MainOption.CONTAGEM,
      image: Contagem_img,
      isVisible: false,
      lstPerfil: [
        Perfil.MASTER,
        Perfil.ANA_FIN,
        Perfil.AMX,
        Perfil.EQS,
        Perfil.AUDT,
        Perfil.ATIVO,
      ],
    },
    {
      id: "2",
      name: MainOption.TRANSFERENCIA,
      image: Transferencia_img,
      isVisible: false,
      lstPerfil: [
        Perfil.MASTER,
        Perfil.ANA_FIN,
        Perfil.AMX,
        Perfil.EQS,
        Perfil.AUDT,
        Perfil.ATIVO,
      ],
    },
    {
      id: "3",
      name: MainOption.GERENCIAMENTO,
      image: GerArmazen_img,
      isVisible: false,
      lstPerfil: [
        Perfil.MASTER,
        Perfil.ANA_FIN,
        Perfil.AMX,
        Perfil.EQS,
        Perfil.AUDT,
        Perfil.ATIVO,
      ],
    },
    {
      id: "4",
      name: MainOption.ATENDIMENTO,
      image: AtendReserva_img,
      isVisible: false,
      lstPerfil: [
        Perfil.MASTER,
        Perfil.ANA_FIN,
        Perfil.AMX,
        Perfil.EQS,
        Perfil.AUDT,
        Perfil.ATIVO,
      ],
    },
  ];

  useEffect(() => {
    console.log("Chamou na Main");
    console.log("[TELA MAIN] Dados Iniciais: ", props);
    // buildMenu()
  }, []);

  // const buildMenu = () => {
  //   itemsMainMenu.map((item) => {
  //     if (props.msg == '1') {
  //       item.isVisible = true
  //     } else if (item.name
  //   }
  // }
  const handlePress = (item: ItemMenuPrincipal) => {
    if (item.name == MainOption.CONTAGEM)
      return navigation.navigate("Contagens", props);
    else if (item.name == MainOption.TRANSFERENCIA)
      return navigation.navigate("Contagens", props);
    else if (item.name == MainOption.GERENCIAMENTO)
      return navigation.navigate("Contagens", props);
    else (item.name == MainOption.ATENDIMENTO)
      return navigation.navigate("Contagens", props);

    // Alert.alert("Item Selecionado", `Você clicou em: ${item.name}`);
    console.log(`Item selecionado: ${item.name}`);
  };
  useEffect(() => {
    console.log("Chamou na Main");
    console.log("Dados Iniciais: ", props);
    // buildMenu()
  }, []);

  // const filterMenuVisibles = () => {
  //   return itemsMainMenu.filter((item) => item.isVisible == true);
  // }
  const renderItem = ({ item }: { item: ItemMenuPrincipal }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={item.image as ImageSourcePropType} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        //data={filterMenuVisibles()}
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
