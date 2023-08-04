import { ImageProps, View } from 'react-native'
import React from 'react'
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
          headerShown: true,
          headerTitle: '',
          drawerIcon: ({ }) => {
            return <Icon name='reorder-three' size={24} color='#000' />;

          },
          headerTransparent: true,
        }
      }>
      <Drawer.Screen name="Home"
        component={Tabs}
      />
    </Drawer.Navigator>
  )
}

interface myHeader {
  isMovieScreen?: boolean
}

const Header = ({ isMovieScreen }: myHeader) => {
  const navigation = useNavigation<any>();
  return (

    <HeaderView>
      {isMovieScreen ?
        <Icon name='arrow-back' size={25} color="#fff" onPress={() => navigation.goBack()} /> :
        <Icon name='reorder-three' size={25} color="#fff" onPress={DrawerNavigator} />
      }
      <Text style={{ color: 'white' }}>Ola</Text>
      <View style={styles.iconStyle}>
        <Icon onPress={() => navigation.navigate('Splash')} name='person-outline' size={18} color="#fff" />
      </View>
    </HeaderView>
  )
}

export default Header