import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons'
import storage from '@react-native-firebase/storage'
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'


const Signup = () => {

  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState();

  const handleSignUp = () => {
    auth().createUserWithEmailAndPassword(email,password)
    .then( async (response) => {
      if (image) {
        const userUid = response.user.uid;
        const storageRef = storage().ref().child(`profile_images/${userUid}`).putFile(image);
        console.log(storageRef);
        
        try {
          await storageRef;              
          Alert.alert('Imagem enviada com sucesso');
          
        } catch (e) {
          console.log(e);
        }
    }
    })
  }

  const imagePicker = () => {
    Alert.alert('Selecione','Informe de onde voce quer pegar a foto', [
      {
        text: 'Galeria',
        onPress: () => pickFromGalery(),
      },
      {
        text: 'Camera',
        onPress: () => pickFromCamera(),
      }
    ],
    {
      cancelable: true,
      onDismiss: () => console.log('tratar depois')
      
    }    
    )
  }

  const pickFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    }
    
    const result = await launchImageLibrary(options).then((image: any) => {
      setImage(image.assets[0].uri)
    });
  };
  
  const pickFromCamera = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo'
    }

    const result = await launchCamera(options);
  };

  return (
    <Background>
      <MainContent>
        <Icon name='arrow-back' size={30} style={{ position: 'absolute', color: 'white', top: 20, left: 20 }} onPress={() => navigation.goBack()} />
        <Input title='Email' value={email} onChangeText={setEmail} />
        <Input title='Senha' secureTextEntry value={password} onChangeText={setPassword} />
        <Button colorGradient={false} title='Escolher imagem de perfil' onPress={imagePicker} />

        <Button colorGradient={true} title='Cadastrar' onPress={handleSignUp}/>
      </MainContent>
    </Background>
  )
}


export default Signup