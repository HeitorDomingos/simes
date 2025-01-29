import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraView } from "expo-camera";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import {
  ProdutoEquipamento,
  ProdutoEquipamentoCAB,
} from "../../models/ProdutoEquipamento";

// interface Product {
//   id: string;
//   type: string;
//   data: string;
// }

export default function ContarProduto() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProducts, setScannedProducts] = useState<ProdutoEquipamento[]>(
    []
  );
  const route = useRoute();
  const props = route.params as ProdutoEquipamentoCAB;
  const [lstProduto, setLstProduto] = useState<ProdutoEquipamento[]>([]);

  useEffect(() => {
    console.log("[TELA SCAN] props ", props);

    // Solicitar permissão para a câmera
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    requestPermission()
  }, []);

  // Função chamada ao escanear um código
  const handleBarCodeScanned = ({ type, data,  }: {type: string; data: string;}) => {
    // Alert.alert("Produto Escaneado", `Tipo: ${type}\nDados: ${data}`);
    showAlert(data);
    setIsScanning(false);

    Alert.alert("Produto Escaneado", `Tipo: ${type}\nDados: ${data}`);
  };

  const confirmaScan = (status: boolean, data: string) => {
    lstProduto.map((item) => {
      if (item.Tag == data) {
        item.Contado = "1";
        item.Dofi = status ? "1" : "0";
        item.DataHora = new Date().toISOString();
        return item;
      }
    });
   
  };

  const showAlert = (data: string) =>
    Alert.alert(
      "Atenção!",
      "O Equipamento é DOFI?",
      [
        {
          text: "Sim",
          onPress: () => confirmaScan(true, data),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => confirmaScan(false, data),
      }
    );

  // Exibir mensagem se não houver permissão
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Solicitando permissão para acessar a câmera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red" }}>
          Permissão para acessar a câmera negada.
        </Text>
      </View>
    );
  }
 
  const filterLista = () => {
    return props.lstProduto.filter((item) => item.Contado == "1");
  };
  return (
    <View style={styles.container}>
      {/* Botão para abrir o scanner */}
      {!isScanning && (
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => setIsScanning(true)}
        >
          <Ionicons name="scan" size={24} color="#fff" />
          <Text style={styles.scanButtonText}>Escanear Produto</Text>
        </TouchableOpacity>
      )}

      {/* Scanner de Código de Barras */}
      {isScanning && (
        <CameraView
          onBarcodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsScanning(false)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
        </CameraView>
      )}

      {/* Lista de Produtos Escaneados */}
      {!isScanning && (
        <FlatList
          data={scannedProducts}
          keyExtractor={(item) => item.Tag}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productText}>TAG: {item.Tag}</Text>
              <Text style={styles.productText}>Descrição: {item.Descricao}</Text>
              <Text style={styles.productText}>Local: {item.Local}</Text>
              <Text style={styles.productText}>Dofi: {item.Dofi}</Text>
              {/* <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteProduct(item.id)}
              >
                <Ionicons name="trash" size={20} color="#fff" />
              </TouchableOpacity> */}
            </View>
          )}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Nenhum produto escaneado ainda.
            </Text>
          }
        />
      )}

      {/* Botão Finalizar */}
      <TouchableOpacity
        style={styles.finalizeButton}
        onPress={() =>
          Alert.alert("Finalizar", "Lista finalizada com sucesso!")
        }
      >
        <Text style={styles.finalizeButtonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
