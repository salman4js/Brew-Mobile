import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { Card } from 'react-native-elements';

// Importing styles!
import styles from './Styles';


const Panel = (props) => {
    return(
        <Card>
            <Card.Title>
                Room No: {props.title}
            </Card.Title>
            <View>
                <Text style = {props.engaged === "true" ? styles.textContainerSuccess : styles.textContainerSecondary}>
                    Engaged: {props.engaged}
                </Text>
                <Text style = {styles.textContainer}>
                    Room Type: {props.roomtype}
                </Text>
                <Text style = {styles.textContainer}>
                    Bed Count: {props.bedcount}
                </Text>
                <Text style = {styles.textContainer}>
                    Price: {props.price}
                </Text>
            </View>
            <View style = {styles.buttonHolder}>
                <TouchableOpacity disabled = {props.engaged === "true" ? false : true} 
                style = {props.engaged === "true" ? styles.buttonSuccess : styles.buttonSecondary}
                onPress = {() => props.showDetails(props.roomid)}
                >
                    <Text style = {styles.buttonIn}>
                        Check Details
                    </Text>
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default Panel;