import { View} from 'react-native'
import React from 'react'
import UploadImage from './Screens/UploadImage'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './components/MyDrawer'
import { IpAddressProvider } from './components/IpAddressContext'

export default function App() {
  return (
    <IpAddressProvider>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </IpAddressProvider>
  )
}
