import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UploadVideo from '../Screens/UploadVideo';
import UploadImage from '../Screens/UploadImage';

const Tab = createMaterialBottomTabNavigator();

export default function UploadViewBottomTab() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#2a9d8f' }}>
      <Tab.Screen 
        name="Photo" 
        component={UploadImage} 
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="image-multiple" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen 
        name="Video" 
        component={UploadVideo} 
        options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="video" color={color} size={26} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}