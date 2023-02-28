import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './Styles';


const Count = (props) => {
    return(
        <View style = {styles.container}>
            {props.count ? (
              <Text style = {styles.textContainer}>
                Total Rooms: {props.total}, Booked Rooms: {props.booked}, Available: {props.available}
              </Text>
            ) : (
              <Text style = {styles.textUserContainer}>
                Total Amount : {props.rate}
              </Text>
            )}
        </View>
    )
}

export default Count;