import {  StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash from './screens/Splash/'
import Home from './screens/Home/'
import SignatureScreen from './screens/SignatureScreen'
import Login from './screens/Login/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Signup from './screens/Signup/Signup'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (

          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              if (route.name === 'Home') {
                icon = focused ? 'home' : 'home-sharp';
              } else {
                icon = focused ? 'bookmark' : 'bookmark-outline';
              }
              return <Icon name={icon} size={24} color={color} />;
            },
            tabBarStyle: {backgroundColor: '#0e0e0e', borderTopWidth: 0, height: 60, padding:10},
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            headerShown: false,
          })}
        >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false, title: ''}} />
      </Tab.Navigator>
)


const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'black'}/>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}  />
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
          <Stack.Screen name='SignatureScreen' component={SignatureScreen} options={{headerShown: false}} />
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
          <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App