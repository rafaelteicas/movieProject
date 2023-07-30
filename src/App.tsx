import {  StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from './screens/Splash/'
import Home from './screens/Home/'
import SignatureScreen from './screens/SignatureScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'black'}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
          <Stack.Screen name='SignatureScreen' component={SignatureScreen} options={{headerShown: false}} />
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App