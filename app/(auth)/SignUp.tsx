import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/data/Colors';
import TextInputField from '@/components/Shared/TextInputField';
import Button from '@/components/Shared/Button';


export default function SignUp() {

    const[profileImage,setProfileImage]=useState<string|undefined>();
    const[fullName,setFullName]=useState<string|undefined>();
    const[email,setEmail]=useState<string|undefined>();
    const[password,setPassword]=useState<string|undefined>();

    const onBtnPress= ()=>{

    }
    

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
            <Image source={require('./../../assets/images/user-profile.png')}
                style={{
                 width:140,
                 height: 140,
                 borderRadius: 99,
                 marginTop: 20,
             }}/>

            <Ionicons name="camera" size={24} color={Colors.PRIMARY}
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
            }} />
            </View>

            
        </View>
        <TextInputField label='Full Name' onChangeText={(v)=>setFullName(v)} />
        <TextInputField label='Email' onChangeText={(v)=>setEmail(v)} />
        <TextInputField label='password' password={true} onChangeText={(v)=>setPassword(v)} />

            <Button text='Create Account' onPress={()=>onBtnPress}/>
    </View>
  )
}