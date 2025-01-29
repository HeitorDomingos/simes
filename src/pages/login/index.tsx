import React, { useState } from "react";
import { style } from "./styles";
import Logo from "../../assets/LOGO_SIMES_preto.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, View, Image, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { Loading } from "../../components/Loading";
import { getLogin } from "../../services/auth";
import { DadosIniciais } from "../../models/DadosIniciais";
import { AlertTitle } from "../../enums/AlertTitle";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function obterAcesso() {
    try {
      setLoading(true);
      if (email == "" || password == "") {
        return Alert.alert(
          AlertTitle.ATENTION,
          "Usuário ou senha não foram informados!"
        );
      } else {
        const response = await getLogin(email, password);
        if (response) {
          validaAcesso(response);
        } else {
          Alert.alert(AlertTitle.ERROR, "Houve um erro ao buscar os dados!");
        }
      }
      Loading({ loading: true });
      Alert.alert(AlertTitle.ATENTION, "E-mail ou senha invalida!");
    } catch (error: any) {
      console.log(error);
      Alert.alert(AlertTitle.ERROR, error.message);
      // throw new Error(error || "Falha no Login");
    } finally {
      setLoading(false);
    }
  }
  const validaAcesso = (response: DadosIniciais) => {
    if (response) {
      if (response.msg === "Usuario ou senha invalidos") {
        console.log('response: ' , response.msg);
        return Alert.alert("Atenção", response.msg);
      } else if (response.msg === "Usuário sem perfil cadastrado, favor contactar area de Acessos!"
      ) {
        console.log('response: ' , response.msg);
        return Alert.alert("Atenção", response.msg);
      } else {
        console.log('response: ' , response);
        return navigation.navigate("Menu", response);
      }
    }
  };

  return (
    <View style={style.container}>
      {/* <View style={style.boxheader}> */}
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        {/* <Text style={style.text}>Bem vindo de volta!</Text> */}
      </View>
      {/* </View> */}
      <View style={style.boxMid}>
        <Input
          title="USUÁRIO"
          value={email}
          onChangeText={setEmail}
          IconRigth={MaterialIcons}
          iconRightName="email"
          onIconRigthPress={() => console.log("OLA")}
        />
        <Input
          title="SENHA"
          value={password}
          onChangeText={setPassword}
          IconRigth={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRigthPress={() => setShowPassword(!showPassword)}
          secureTextEntry={showPassword}
          multiline={false}
        />
      </View>
      <View style={style.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={() => obterAcesso()} />
      </View>
      <Text style={style.textBottomCreate}>Versão 1.0.0</Text>
    </View>
  );
}
