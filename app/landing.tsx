import { View,Text ,Image, } from 'react-native'
import React from 'react';
import Button from '@/components/Shared/Button';
import { useRouter } from 'expo-router';
import 'react-native-gesture-handler';
import { Pressable,  GestureHandlerRootView,} from 'react-native-gesture-handler';
import Colors from '@/data/Colors';


export default function LandingScreen(){
    const router=useRouter();
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
                    color: Colors.GRAY,
                }}>Your college news, Updated in your pocket, join the app, Register for new events and Many More</Text>

                <Button text='Get Started' onPress={() => router.push('/(auth)/SignUp')} />
                
                
                <GestureHandlerRootView  style={{ }}>
                <Pressable onPress={()=> router.push('/(auth)/SinIn')}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: Colors.GRAY
                }}>Already have an account? Sing In Here</Text>
                </Pressable>
                </GestureHandlerRootView>


            </View>
        </View>
    )
}