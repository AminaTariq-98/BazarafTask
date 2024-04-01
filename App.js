import React from 'react'
import MainNavigator from './src/Navigation/MainNavigation'
import { Provider } from 'react-redux'
import store from './src/Store/Store'
 
 const App = () => {
   return (
      <>
      <Provider  store={store}>
      <MainNavigator />
      </Provider>
      </>
   )
 }
 
 export default App
 