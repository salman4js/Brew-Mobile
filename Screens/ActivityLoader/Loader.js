import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

// Importing styles!
import styles from './Styles';


const Loader = (props) => {
    return(
        <ActivityIndicator
            size = {props.size}
            style = {props.style !== undefined ? props.style : styles.loader}
        />
    )
}

export default Loader;