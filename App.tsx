import { NavigationContainer } from '@react-navigation/native';
import { RealmProvider } from '@realm/react';
import React from 'react';
import { StyleSheet } from 'react-native';
import './gesture-handler';
import { DadosIniciaisSchema } from './src/db/schemas/DadosIniciaisSchema';
import { ProductEquipamentoCABSchema } from './src/db/schemas/ProductEquipamentoCABSchema';
import { ProductEquipamentoSchema } from './src/db/schemas/ProductEquipamentoSchema';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <RealmProvider schema={[ DadosIniciaisSchema, ProductEquipamentoSchema, ProductEquipamentoCABSchema]}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </RealmProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
