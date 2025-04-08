import { View,Text ,Image, } from 'react-native'
import React from 'react'
import Button from '@/components/Shared/Button'

export default function LandingScreen(){
    return(
        <View>
            <Image source={require('./../assets/images/im1.jpg')}
                style={{
                    width:'100%',
                    height:'500',
                    borderRadius:16
                }}
            />
            <View style={{
                padding:20,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    textAlign:'center',
                }}>Welcome To College Campus</Text>

                <Text style={{
                    textAlign:'center',
                    fontSize: 18,
                    marginTop: 10,
                    color: 'gray',
                }}>Your college news, Updated in your pocket, join the app, Register for new events and Many More</Text>

                <Button text='Get Started' onPress={() => console.log('Button press')} />

                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: 'gray',
                }}>Already have an account? Sing In Here</Text>
            </View>
        </View>
    )
}