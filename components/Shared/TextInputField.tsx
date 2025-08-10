import { View, Text,  TextInput, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'



type TextInputFieldProps={
    label:string,
    onChangeText:(text:string)=>void,
    password?: boolean
}
export default function TextInputField({label,onChangeText,password=false}:TextInputFieldProps) {
  return (
    <View style={{
        marginTop: 10,
    }}>
      <Text style={{color: Colors.GRAY}}>{label}</Text>
      <TextInput placeholder={label} style={styles.textInput}
        secureTextEntry={password}
        onChangeText={onChangeText}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    textInput:{
        padding: 13,
        borderWidth: 0.2,
        borderRadius: 6,
        marginTop: 5,
        fontSize: 17
    }
})