import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './Styles';


const Count = (props) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textContainer}>
                Total Rooms: {props.total}, Booked Rooms: {props.booked}, Available: {props.available}
            </Text>
        </View>
    )
}

export default Count;