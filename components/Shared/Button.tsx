import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import { TouchableOpacity } from 'react-native'

type ButtonProps={
    text:string;
    onPress: ()=>void;
}

export default function Button({text,onPress}:ButtonProps) {
  return (
    <TouchableOpacity
    onPress={onPress} style={{
                       padding: 15,
                       backgroundColor: Colors.PRIMARY,
                       margin: 15,
                       borderRadius: 10,
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign:'center',
                            color:Colors.WHITE,
                        }}>{text}</Text>
                    </TouchableOpacity>
  )
}