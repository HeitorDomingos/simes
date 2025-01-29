import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: "#f8f9fa",
      padding: 10,
    },
    list: {
      paddingBottom: 20,
    },
    columnWrapper: {
      justifyContent: "space-between", // Espaço uniforme entre os itens
    },
    card: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#ffffff",
      margin: 5,
      padding: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
  });
