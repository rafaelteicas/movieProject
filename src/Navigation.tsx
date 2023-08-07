import { LogBox, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Profile from './screens/Profile/Profile';
import { DrawerNavigator } from './components/Header';
import MovieScreen from './screens/MovieScreen';
import Splash from './screens/Splash';
import SignatureScreen from './screens/SignatureScreen';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setUserAction } from './store/reducers/userReducer';
import { useUserReducer } from './store/reducers/userReducer/useUserReducer';
import Favorites from './screens/Favorites/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Tabs = () => (

    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                let icon;
                if (route.name === 'Home') {
                    icon = 'home';
                } else if (route.name === 'Profile') {
                    icon = 'person';
                } else {
                    icon = focused ? 'bookmark' : 'bookmark-outline';
                }
                return <Icon name={icon} size={24} color={color} />;
            },
            tabBarStyle: { backgroundColor: '#0e0e0e', borderTopWidth: 0, height: 60, padding: 10 },
            tabBarActiveTintColor: '#530fa1',
            tabBarInactiveTintColor: '#d1d1d1ed',
            headerShown: false,
        })}
    >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, title: '' }} />
        <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false, title: '' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, title: '' }} />
    </Tab.Navigator>
)

export const Navigation = () => {

    LogBox.ignoreAllLogs();
    const { user } = useUserReducer();
    const { setUser } = useUserReducer();

    

    useEffect((
        auth().onAuthStateChanged((user: any) => {
            setUser(user)
        })
    ), [])



    return (
        <>
            <StatusBar backgroundColor={'black'} />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='fb' >
                    {user ?
                        <>
                            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                            <Stack.Screen name='MovieScreen' component={MovieScreen} options={{ headerShown: false }} />
                        </> :
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
