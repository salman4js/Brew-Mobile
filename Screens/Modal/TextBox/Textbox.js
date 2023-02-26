import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

// Importing Styles!
import styles from './Styles';


const TextBox = (props) => {
    return (
        <View>
            <Text style = {styles.textContainer}>
                Customer Name: {props.name}
            </Text>
            <Text style = {styles.textContainer}>
                PhoneNumber: {props.phoneNumber}
            </Text>
            <Text style = {styles.textContainer}>
                Second PhoneNumber: {props.secondPhoneNumber}
            </Text>
            <Text style = {styles.textContainer}>
                Aadhar Card: {props.aadharcard}
            </Text>
            <Text style = {styles.textContainer}>
                Date of Check-In: {props.dateofcheckin}
            </Text>
            <Text style = {styles.textContainer}>
                Date of Check-Out: {props.dateofcheckout === undefined ? "- No Checkout Date" : props.dateofcheckout}
            </Text>
            <Text style = {styles.textContainer}>
                Adults: {props.adults}
            </Text>
            <Text style = {styles.textContainer}>
                Children: {props.childrens}
            </Text>
            <Text style = {styles.textContainer}>
               Advance: {props.advance}
            </Text>
            <Text style = {styles.textContainer}>
                Discount: {props.discount}
            </Text>
        </View>
    )
}

export default TextBox;