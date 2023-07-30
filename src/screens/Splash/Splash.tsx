import React, { useEffect } from 'react'
import Background from '../../components/Background';
import { SplashScreen, Text } from './styles';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {

  const {navigate} = useNavigation()

  useEffect(() => {
    setTimeout( () => navigate('SignatureScreen') ,2000)
  }, [])

  return (
    <>
    <Background>
      <SplashScreen>
        <Text>Ola</Text>
      </SplashScreen>
      </Background>
    <Loading /> 
    </>

  )
}


export default Splash