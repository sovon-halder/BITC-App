import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/data/Colors';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';


export default function SignUp() {

    const[profileImage,setProfileImage]=useState<string|undefined>();
    const[fullName,setFullName]=useState<string|undefined>();
    const[email,setEmail]=useState<string|undefined>();
    const[password,setPassword]=useState<string|undefined>();

    const onBtnPress= ()=>{

           if(!email|| !password|| fullName){
                    ToastAndroid.show('Please enter all details!',ToastAndroid.BOTTOM);
                    return;
            }
            
            createUserWithEmailAndPassword(auth,email,password)
            .then(async(userCredentials)=>{
              console.log(userCredentials);
              //Upload profile image

              //save to database

            }).catch((error)=>{
              const errorMsg=error?.message
              ToastAndroid.show(errorMsg,ToastAndroid.BOTTOM)
            })
            
       
    }
    

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.5,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    };


  return (
    <View style={{
        paddingTop: 60,
        padding: 20,
    }}>
      <Text style={{
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Creat New Account</Text>

        <View style={{
            display: 'flex',
            alignItems: 'center'
             }}>
                <View>
                  <TouchableOpacity onPress={()=>pickImage()}>
                  
                  {profileImage?
                  <Image source={{uri:profileImage}} style={styles.profileImage}/>
                  :
                  
                   <Image source={require('./../../assets/images/user-profile.png')}
                   style={styles.profileImage}/>
                  }

                    <Ionicons name="camera" size={24} color={Colors.PRIMARY}
                         style={{
                              position: 'absolute',
                              bottom: 0,
                              right: 0,
                       }} />
                       </TouchableOpacity>
            
            </View>

            
        </View>


        <TextInputField label='Full Name' onChangeText={(v)=>setFullName(v)} />
        <TextInputField label='Email' onChangeText={(v)=>setEmail(v)} />
        <TextInputField label='password' password={true} onChangeText={(v)=>setPassword(v)} />

        <Button text='Create Account' onPress={()=>onBtnPress()}/>
    </View>
  )
}



const styles=StyleSheet.create({
  profileImage:{
    width:140,
    height: 140,
    borderRadius: 99,
    marginTop: 20,
  }
})