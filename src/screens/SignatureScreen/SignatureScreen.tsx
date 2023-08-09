import React from 'react'
import Header from '../../components/Header'
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const SignatureScreen = () => {
  const { navigate } = useNavigation<any>();
  return (
      <Background>
    <SafeAreaView>

        <Header />
        <View>
          <Image style={{  width, height: height * 0.8, top: -100 }} source={require('../../assets/bg.jpg')} />
          <LinearGradient
            colors={['transparent', '#15051d']}
            style={{ position:'absolute', width , height: height-250 , alignItems: 'center', justifyContent: 'flex-end' }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1}}
          />
          <View style={{position: 'absolute', top: '50%'}}>

        <Text style={{ color: 'white', fontSize: 30, marginLeft: 20 }}>Milhares de filmes e series pra voce</Text>
        <Text style={{ color: 'white', fontSize: 20,marginLeft: 20 }}>Aproveite...</Text>

        <Button colorGradient title={'FAZER LOGIN'} onPress={() => navigate('Login')} style={{ top: '40%', marginLeft: 20 }} />
        <Button colorGradient={false} title={'ASSINAR'} onPress={() => navigate('Signup')} style={{ top: '40%', marginLeft: 20 }} />

          </View>
        </View>

    </SafeAreaView>
      </Background>
  )
}

export default SignatureScreen