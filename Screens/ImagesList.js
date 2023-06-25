import { View, Text, StyleSheet, FlatList, Image, RefreshControl, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import IpAddressContext from '../components/IpAddressContext';


export default function ImagesList() {

  const[imageDataList,setImageDataList]=useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {ipAddress} = useContext(IpAddressContext);

  useEffect(()=>{
    loadData();
  },[])
  
  async function loadData(){

    await fetch(`http://${ipAddress}/image/`)
     .then((res) => res.json())
     .then((data) =>{
        setImageDataList(data);           
     })           
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <FlatList
          data={imageDataList}
          renderItem={({item}) => 
            <Image
                style={styles.image}
                source={{uri:`http://${ipAddress}/image/${item.id}`}}
            /> 
          }
          keyExtractor={item => item.id}
      />   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image:{
    height: 500,
    width: "98.5%",
    borderWidth: 4,
    borderColor:'black',
    margin:3,
    borderRadius:20
  }
})