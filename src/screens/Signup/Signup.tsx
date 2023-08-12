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
import { validateEmail } from '../../function/email'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const confirmSchema = yup.object({
  username: yup.string().required('Insira o nome de usuairo'),
  email: yup.string().required('Insira o email').email('Email invalido'),
  password: yup.string().required('Insira a senha').min(8, 'Sua senha deve ter 8 digitos'),
  confirmPassword: yup.string().required('Insira a confirmacao').oneOf([yup.ref('password'), ''], 'Confirmacao invalida')
})

const Signup = () => {

  const navigation = useNavigation<any>();
  const [image, setImage] = useState();
  const { control, handleSubmit, formState: { errors } } = useForm<any>({resolver: yupResolver(confirmSchema)});

  const handleSignUp = async (data: any) => {    
    if (image) {
       await auth().createUserWithEmailAndPassword(data?.email,data?.email)
      .then(async (response) => {
        const userUid = response.user.uid;
        const storageRef = storage().ref().child(`profile_images/${userUid}`).putFile(image);
        firestore().collection(`data${userUid}`).add({username: data?.username});
        console.log(storageRef);
        try {
          await storageRef;              
          Alert.alert('Usuario cadastrado com sucesso');
        } catch (e) {
          console.log(e);
        }  
      })
    } else {
      null
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

  console.log(errors.email?.message);
  
  console.log(control._fields?.email?._f.value);
  
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
              errorMsg={errors.username?.message}
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
              errorMsg = {errors.email?.message}
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
              errorMsg={errors.password?.message}
            />
          )}
          />
           <Controller 
          control={control}
          name='confirmPassword'
          render={({field: {onChange}}) => (
            <Input 
              title='Confirmar senha'
              secureTextEntry 
              onChangeText={onChange} 
              errorMsg={errors.confirmPassword?.message}
            />
          )}
          />
        <Button colorGradient={true} title='Cadastrar' onPress={handleSubmit(handleSignUp)}/>
        <Icon name='arrow-back' size={30} style={{ position: 'absolute', color: 'white', top: 20, left: 20 }} onPress={() => navigation.goBack()} />

      </MainContent>
    </Background>
  )
}


export default Signup