import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { PropsProvider } from './provider/PropsProvider';

// ---- import the screns ------------------------------------ //
import Home from './screens/Home';
import Profile from './screens/Profile';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <PropsProvider value = {'Giving value from app'}>
          <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name ='Home' component = {Home} />
            <Stack.Screen name = 'Profile' component = {Profile} />
          </Stack.Navigator>
        </PropsProvider>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
