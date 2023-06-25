import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../Screens/Settings';
import UploadViewStack from './UploadViewStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
      
      screenOptions={{
        headerStyle: { height: 60, backgroundColor: "#2a9d8f"},
        drawerActiveBackgroundColor:'#2a9d8f',
        headerTintColor:'#fff',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#fff',
        drawerType:'slide',
        drawerStyle:{backgroundColor:'#344e41'},
      }}>
      <Drawer.Screen name="Upload Image/Video" component={UploadViewStack} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )  
}