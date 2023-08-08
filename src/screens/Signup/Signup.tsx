import { View, Text, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { Controller, useForm } from 'react-hook-form'


const Signup = () => {

  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [error,setError] = useState<boolean>(false);

  const handleSignUp = async (data: any) => {    
    if(image && data?.email && data?.password && data?.username) {
      await auth().createUserWithEmailAndPassword(data?.email,data?.email)
    .then(async (response) => {
        const userUid = response.user.uid;
        const storageRef = storage().ref().child(`profile_images/${userUid}`).putFile(image);
        firestore().collection(`data${userUid}`).add({username: data?.username});
        console.log(storageRef);
        try {
          await storageRef;              
          Alert.alert('Imagem enviada com sucesso');
        } catch (e) {
          console.log(e);
        }
    })
    } else {
      setError(true)
    }
    
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
        {image ? (<Image source={{uri: image}} width={200} height={200} borderRadius={100} style={{marginBottom: 30}} />) : (<Icon name='person-circle-sharp' size={200} color='white' onPress={() => imagePicker()} style={{marginBottom: 30}} />)}
        <Controller 
          control={control}
          name='username'
          render={({field: {onChange}}) => (
            <Input 
              title='Usuario' 
              onChangeText={onChange}
              isError={error}
            />
          )}
          />
        <Controller 
          control={control}
          name='email'
          render={({field: {onChange}}) => (
            <Input 
              title='Email' 
              onChangeText={onChange}
            />
          )}
          />
        <Controller 
          control={control}
          name='password'
          render={({field: {onChange}}) => (
            <Input 
              title='Senha'
              secureTextEntry 
              onChangeText={onChange} 
            />
          )}
          />
        <Button colorGradient={true} title='Cadastrar' onPress={handleSubmit(handleSignUp)}/>
      </MainContent>
    </Background>
  )
}


export default Signup