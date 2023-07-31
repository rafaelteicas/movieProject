import { ImageProps, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderView, Text } from './styles'
import { useNavigation } from '@react-navigation/native'

interface myHeader {
  isMovieScreen?: boolean
}

const Header = ({ isMovieScreen }: myHeader) => {
  const navigation = useNavigation();
  return (

    <HeaderView>
      {isMovieScreen ?
        <Icon name='arrow-back' size={25} color="#fff" onPress={() => navigation.goBack()} /> :
        <Icon name='reorder-three' size={25} color="#fff" />
      }
      <Text style={{ color: 'white' }}>Ola</Text>
      <View style={{ backgroundColor: '#ffffff2f', width: 30, height: 30, borderRadius: 30 / 2, alignItems: 'center', justifyContent: 'center' }}>
        <Icon onPress={() => navigate('Splash')} name='person-outline' size={18} color="#fff" />
      </View>
    </HeaderView>
  )
}

export default Header