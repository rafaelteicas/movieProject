import React from 'react'
import { Navigation } from './Navigation'
import { Provider } from 'react-redux'
import store from './store'
import { SheetProvider } from 'react-native-actions-sheet'
import "./sheets.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <SheetProvider>
        <Navigation />
      </SheetProvider>
    </Provider>
  )
}

export default App