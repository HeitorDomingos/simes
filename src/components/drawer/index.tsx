import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { styles } from "./styles";
import {UserImg} from "../../assets/user2.png";
import { NavigationProp, useNavigation } from "@react-navigation/native";



const CustomDrawer = (props: any) => {

  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={{ flex: 1 }}>
      {/* Cabeçalho do Drawer */}
      <View style={styles.header}>
        <Image
          source={UserImg} // URL da imagem do usuário
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Heitor Domingos</Text>
      </View>

      {/* Lista de Menus */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Opcional: Footer */}
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.footerText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;