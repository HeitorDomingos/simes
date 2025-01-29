// import React from "react";
// import {
//   Alert,
//   FlatList,
//   Image,
//   ImageSourcePropType,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { styles } from "../main/styles";
// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import MensalImg from "../../assets/bottleblack512.png";
// import DiariaImg from "../../assets/bottlered512.png";
// import { SubMainOption } from "../../enums/SubMainOption";
// import { ItemSubMenu } from "../../models/ItemMenuPrincipal";

// import { getRealm } from "../../db/realm";
// import { obterProduto } from "../../services/contagem";
// import { AlertTitle } from "../../enums/AlertTitle";

// export default function Mensal() {

//   const navigation = useNavigation<NavigationProp<any>>();
//   const realm = getRealm();
//   const data: ItemSubMenu[] = [
//     { id: "1", name: SubMainOption.MENSAL, image: MensalImg },
//     { id: "2", name: SubMainOption.DIARIO, image: DiariaImg },
//   ];

//   async function obterProdutos() {
     
  

//   const handlePress = (item: ItemSubMenu) => {
//     if (item.name == SubMainOption.MENSAL) obterProdutos();
//         navigation.navigate("Mensal");    
//         console.log(`Item selecionado: ${item.name}`);
//   };

//   const renderItem = ({ item }: { item: ItemMenuPrincipal }) => (
//     <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
//       <Image source={item.image as ImageSourcePropType} style={styles.image} />
//       <Text style={styles.text}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2} // Exibir em 2 colunas
//         contentContainerStyle={styles.list}
//         columnWrapperStyle={styles.columnWrapper} // Estilo para a linha de colunas
//       />
//     </View>
//   );
// }
