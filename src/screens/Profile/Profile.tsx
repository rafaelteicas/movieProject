import React, { useEffect, useState } from 'react'
import { Alert, Button, Dimensions, Image, Platform, Text, View } from 'react-native'
import Background from '../../components/Background'
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer'
import ImagePicker from 'react-native-image-crop-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const Profile = () => {
    const {user} = useUserReducer();
    const userId = user.uid;
    const { width, height } = Dimensions.get('window');
    const [image, setImage] = useState();
    const [data, setData] = useState([]);
    const [myUsername, setMyUsername] = useState('');

    useEffect (() => {
      const userRef = firestore().collection(`data${userId}`).onSnapshot(async (querySnapshot) => {
        const data = await querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        setData(data)
        data.map(i => setMyUsername(i?.username))
      });
      const storageRef = storage().ref();
      storageRef.child(`/profile_images/${user.uid}`).getDownloadURL().then((url: any) => {
        setImage(url);
      });

      return () => userRef();
    } , [])
    
    

    return (
        <Background>
            <View style={{ height, alignItems: 'center', justifyContent:'center'}}>
                <Image borderRadius={width/ 2} width={200} height={200} source={{ uri: image }} />
                 <Text style={{color: 'white', fontSize: 30}}>{myUsername}</Text>
                 <Text style={{color: 'white', marginBottom: 40}}>{user.email}</Text>
                 <Button title='sair' onPress={() => auth().signOut()} />
            </View>
        </Background>
    )
}

export default Profile