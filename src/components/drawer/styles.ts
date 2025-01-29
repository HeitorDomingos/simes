import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    header: {
      backgroundColor: themas.Colors.primary,
      alignItems: "center",
      justifyContent: "center",
      paddingTop:80,
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 40,
      marginBottom: 10,
      borderWidth: 2,
      borderColor: "#3",
    },
    userName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    footer: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: "#ccc",
    },
    footerText: {
      color: themas.Colors.primary,
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  