import React from 'react'
import Background from '../../components/Background';
import { SplashScreen, Text } from './styles';
import Loading from '../../components/Loading';



const index = () => {
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


export default index