import { Image, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderView, ImageLogo, Text, styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Favorites from '../../screens/Favorites/Favorites'
import { Tabs } from '../../Navigation'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer'


interface myHeader{
  isMovieScreen?: boolean,
}

const Header = ({ isMovieScreen, ...props }: myHeader) => {
  const navigation = useNavigation<any>();
  const {user} = useUserReducer();
  const [image, setImage] = useState();
 {user ? ( 
  useEffect ((() => {
    const userRef = firestore().collection('users').doc(user.uid);
    const storageRef = storage().ref();
    storageRef.child(`/profile_images/${user.uid}`).getDownloadURL().then((url: any) => {
      setImage(url);
    });
  }) , [])) : null}

  return (
    <View>

    <HeaderView>
      {isMovieScreen ?
        <Icon name='arrow-back' size={25} color="#fff" onPress={() => navigation.goBack()} /> :
        null
      }
      <ImageLogo resizeMode='center' source={require('../../assets/FILMFLIX.png')} />
      <View style={styles.iconStyle}>
        {user ? (<Image source={{uri: image}} width={30} height={30} borderRadius={15} />)
 : (<Icon onPress={() => auth()} name='person-outline' size={18} color="#fff" />)}
      </View>
    </HeaderView>
    </View>
  )
}

export default Header