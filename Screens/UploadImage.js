import {View, ScrollView, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MyBtn from '../components/MyBtn';
import IpAddressContext from '../components/IpAddressContext';

export default function UploadImage({navigation}) {
    

    const initialImage = {
        imgURL:"https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
        imageName:"null.jpg"
    }

    const[image,setImage] = useState(initialImage);
    const[isUploadBtnDisabled,setUploadBtnDisabled] = useState(true);
    const {ipAddress} = useContext(IpAddressContext);

    async function launchCam(){
        const result = await launchCamera({
            mediaType:"photo",
            quality:1,
            maxHeight:500
            
        });

        if(!result.didCancel){
            setImage({imgURL:result.assets[0].uri, imageName:result.assets[0].fileName});
            setUploadBtnDisabled(false);
        }    
    }

    async function launchGallery(){
        const result = await launchImageLibrary({
            mediaType:'photo',
            quality:1,
        });

        if(!result.didCancel){
            setImage({imgURL:result.assets[0].uri, imageName:result.assets[0].fileName});
            setUploadBtnDisabled(false);
        } 
    }
    function uploadImg ()  {
        let body = new FormData();
        body.append('image', {uri: image.imgURL,name: image.imageName,fileName:"" ,type: 'image/jpg'});

        fetch(`http://${ipAddress}/image/`,{ method: 'POST',headers:{  
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
            } , body :body} )
        

        setImage(initialImage);
        setUploadBtnDisabled(true);
    }

    

    return (
        <ScrollView style={{backgroundColor:'#f7ede2'}}>
            <Image
                style={styles.image}
                source={{uri: image.imgURL}}

            />
            <View style={styles.outer}>
                <View style={styles.inner1}>
                    <MyBtn text={"Camera"} icon={"camera"} onPress={launchCam}/>
                </View>
                <View style={styles.inner2}>
                    <Text style={styles.text}>Or</Text>
                </View>
                <View style={styles.inner3}>
                    <MyBtn text={"Gallery"} icon={"image"} onPress={launchGallery}/>
                </View>
            </View>
            <View style={styles.outer2}>
                <MyBtn text={"Upload"} icon={"upload"} onPress={uploadImg} disabled={isUploadBtnDisabled}/>
            </View>
            <View style={styles.outer3}>
                <MyBtn text={"View uploaded images"} onPress={() => navigation.navigate('Uploaded Images')}/>
            </View>
            
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 460,
        width: "98.5%",
        borderWidth: 4,
        borderColor:'black',
        margin:3,
        borderRadius:20,
    },
    outer:{
        flexDirection: 'row',
        marginTop:20,
        marginHorizontal:30
    },
    inner1:{
        flex:5
    },
    inner2:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 1,
    },
    inner3:{
        flex:5
    },
    outer2:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:18, 
        fontWeight:'700',
    },
    outer3:{
        marginHorizontal:30,
        marginVertical:15
    }

});

