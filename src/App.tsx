import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Splash from './screens/Splash'
import Home from './screens/Home'

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'black'}/>
      <Home />
    </>
  )
}

export default App