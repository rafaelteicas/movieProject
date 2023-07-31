
import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth'

import Splash from './src/screens/Splash';
import SignatureScreen from './src/screens/SignatureScreen';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Tabs = () => (

    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                let icon;
                if (route.name === 'Home') {
                    icon = focused ? 'home' : 'home-sharp';
                } else {
                    icon = focused ? 'bookmark' : 'bookmark-outline';
                }
                return <Icon name={icon} size={24} color={color} />;
            },
            tabBarStyle: { backgroundColor: '#0e0e0e', borderTopWidth: 0, height: 60, padding: 10 },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            headerShown: false,
        })}
    >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, title: '' }} />
    </Tab.Navigator>
)

const App = () => {

    const [user, setUser] = useState();

    useEffect((
        auth().onAuthStateChanged((user) => {
            setUser(user)
        })
    ), [])

    return (
        <>
            <StatusBar backgroundColor={'black'} />
            <NavigationContainer>
                <Stack.Navigator >
                    {user ?
                        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /> :
                        <>
                            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                            <Stack.Screen name='SignatureScreen' component={SignatureScreen} options={{ headerShown: false }} />
                            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                        </>
                    }

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}


export default App