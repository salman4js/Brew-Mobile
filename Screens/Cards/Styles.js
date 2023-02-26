import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808080'
    },
    textContainer: {
        marginBottom: 10,
        fontSize: 15
    },
    textContainerSuccess: {
        marginBottom: 10,
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContainerSecondary: {
        marginBottom: 10,
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
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
        marginTop: 10,
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
        marginBottom : 5 
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
        marginBottom : 5
    },
})

export default styles;