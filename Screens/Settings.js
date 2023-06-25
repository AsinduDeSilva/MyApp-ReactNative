import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { TextInput } from 'react-native-paper'
import IpAddressContext from '../components/IpAddressContext';

export default function Settings() {
  
  const {updateIpAddress} = useContext(IpAddressContext);
  const {ipAddress} = useContext(IpAddressContext);

  return (
    <View>
        <TextInput
            label="Server IP Address & Port"
            value={ipAddress}
            onChangeText={text => updateIpAddress(text)}
        />
    </View>
    
  )
}

const styles = StyleSheet.create({
    
})