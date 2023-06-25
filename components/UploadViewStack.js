import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UploadImage from '../Screens/UploadImage';
import ImagesList from '../Screens/ImagesList';
import UploadViewBottomTab from './UploadViewBottomTab';

const Stack = createStackNavigator();

export default function UploadViewStack() {
   
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={UploadViewBottomTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Uploaded Images" component={ImagesList} />
    </Stack.Navigator>
  )
}