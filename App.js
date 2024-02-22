import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font';

import Tabs from './navigation/Tabs'
import { Home, Restaurant, Order } from './screens'

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) 
  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading assets...</Text>
    </View> 
    )
  else return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={"Main"}>
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}