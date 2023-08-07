import { ImageProps, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderView, Text, styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Tabs } from '../../../App'


const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerShown: false,
          headerTitle: '',
          headerTransparent: true,
          
        }
      }>
      <Drawer.Screen 
        name="Home"
        component={Tabs}
      />
    </Drawer.Navigator>
  )
}

interface myHeader{
  isMovieScreen?: boolean,
}

const Header = ({ isMovieScreen, ...props }: myHeader) => {
  const navigation = useNavigation<any>();
  return (
    <View>

    <HeaderView>
      {isMovieScreen ?
        <Icon name='arrow-back' size={25} color="#fff" onPress={() => navigation.goBack()} /> :
        <Icon name='reorder-three' size={25} color="#fff" />
      }
      <Text style={{ color: 'white' }}>Ola</Text>
      <View style={styles.iconStyle}>
        <Icon onPress={() => navigation.navigate('Splash')} name='person-outline' size={18} color="#fff" />
      </View>
    </HeaderView>
    </View>
  )
}

export default Header