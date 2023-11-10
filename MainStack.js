import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './Inicio';
import CrearCita from './CrearCita';
import EditarCita from './EditarCita';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown :false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CrearCita" component={CrearCita} />
        <Stack.Screen name="EditarCita" component={EditarCita} />
        
        {/* Puedes agregar más pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
