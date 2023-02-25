import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808080'
    },
    textContainer: {
        marginBottom: 10
    },
    textContainerSuccess: {
        marginBottom: 10,
        color: 'green'
    },
    textContainerSecondary: {
        marginBottom: 10,
        color: 'red'
    },
    buttonIn:{
        color: "white",
        fontWeight : "bold",
        fontSize  : 16,
        paddingTop: 2,
        paddingRight: 10,
        paddingLeft: 10
    },
    buttonHolder: {
        paddingLeft : 65,
        paddingRight : 100,
        marginBottom : 5,
    },
    buttonSuccess: {
        width : '120%',
        backgroundColor: 'green',
        paddingVertical : 10,
        paddingHorizontal : 0,
        alignItems : "center",
        justifyContent : "center",
        borderColor : '#2C3A47',
        borderRadius : 4,
        borderWidth : 2,
        marginBottom : 10 
    },
    buttonSecondary: {
        width : '120%',
        backgroundColor: 'grey',
        paddingVertical : 10,
        paddingHorizontal : 0,
        alignItems : "center",
        justifyContent : "center",
        borderColor : '#2C3A47',
        borderRadius : 4,
        borderWidth : 2,
        marginBottom : 10 
    },
})

export default styles;