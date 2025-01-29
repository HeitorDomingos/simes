import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../pages/main";
import Login from "../pages/login";
import CustomDrawer from "../components/drawer";
import { themas } from "../global/themes";
import Contagens from "../pages/contagens";
import ContarProduto from "../pages/contarProduto";
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: themas.Colors.primary },
        headerTintColor: "#fff",
        drawerActiveTintColor: themas.Colors.primary,
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen name="Equipamentos" component={Main} />
      <Drawer.Screen
        name="Menu"
        component={Main}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="ContarProduto"
        component={ContarProduto}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Contagens"
        component={Contagens}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen name="P.A" component={Main} />
      <Drawer.Screen name="Aumoxarifado" component={Main} />
      <Drawer.Screen name="Ativos" component={Main} />
    </Drawer.Navigator>
  );
}
