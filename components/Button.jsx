import { StyleSheet, Text, ToastAndroid, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ btnTitle }) => {
  return (
    <TouchableOpacity 
        style={styles.btnContainer} 
        onPress={()=> ToastAndroid.show("Add some members", ToastAndroid.SHORT)}
    >
      <Text style={styles.btnText}> {btnTitle} </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
        paddingHorizontal: 32,
        paddingVertical: 20,
        borderRadius: 32,
        backgroundColor: 'maroon',

    },
    btnText: {
        color: '#fff',
        fontSize: 16, 
        fontWeight: '400',
    },
})