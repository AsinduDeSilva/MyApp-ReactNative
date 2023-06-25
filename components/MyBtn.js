import * as React from 'react';
import { Button } from 'react-native-paper';

const MyBtn = (props) => (
  <Button disabled={props.disabled} icon={props.icon} mode="contained" onPress={props.onPress} buttonColor='#344e41'>  
    {props.text}
  </Button>
);

export default MyBtn;