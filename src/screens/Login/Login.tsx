import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from "react-hook-form";
import { useSelector } from 'react-redux'

const Login = () => {
  const navigation = useNavigation<any>();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [error,setError] = useState<boolean>(false);
  const [isNull, setNull] = useState<boolean>(false);
  
  const handleSignIn = async (data: any) => {
    if(data?.email ==  "" || data?.email == undefined) {
      setNull(true)
      setError(false)
    } else if (data?.password ==  "" || data?.password == undefined) {
      setNull(true)
      setError(false)
    } else {
        setNull(false);
        const login = await auth().signInWithEmailAndPassword(data?.email,data?.password).then(() => navigation.navigate('Home')).catch(() => setError(true))
        return login;
    }
  }

  return (
    <Background>
      <MainContent>
        <Controller 
          control={control}
          name='email'
          render={({field: {onChange}}) => (
            <Input 
              title='Email' 
              onChangeText={onChange}
              isError = {error}
              isNull={isNull}
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
        <Icon name='arrow-back' size={30} style={{ position: 'absolute', color: 'white', top: 20, left: 20 }} onPress={() => navigation.goBack()} />
        <Button colorGradient={true} title='Login' onPress={handleSubmit(handleSignIn)} />
      </MainContent>
    </Background>
  )
}

export default Login