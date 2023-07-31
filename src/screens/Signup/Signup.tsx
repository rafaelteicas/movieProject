import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons'

const Signup = () => {

  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    const login = await auth().createUserWithEmailAndPassword(email, password)
  }


  const handleSubmit = async () => {

    await handleSignup()
    navigation.navigate('Home')

  }
  return (
    <Background>
      <MainContent>
        <Icon name='arrow-back' size={30} style={{ position: 'absolute', color: 'white', top: 20, left: 20 }} onPress={() => navigation.goBack()} />
        <Input title='Email' value={email} onChangeText={setEmail} />
        <Input title='Senha' secureTextEntry value={password} onChangeText={setPassword} />
        <Button colorGradient={true} title='Cadastrar' onPress={handleSubmit} />
      </MainContent>
    </Background>
  )
}

export default Signup