import { StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(9,14,44)'
    },
    headline: {
        paddingTop: Dimensions.get('window').height / 3,
        alignItems: 'center',
        marginBottom: 20
    },
    langHeadline:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textarea:{
        color: 'red',
        backgroundColor: 'white',
        borderColor: 'blue'
    },
    smallBranding: {
        color: 'white'
    },
    inputView: {
        width: '120%',
        height: 44,
        backgroundColor: "#f1f3f6",
        borderRadius: 8,
        paddingHorizontal: 18,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 30
    },
    inputFieldArea : {
        paddingLeft : 65,
        paddingRight : 100,
        paddingTop: 30,
        marginBottom : 20
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
        marginBottom : 20
    },
    loader: {
       paddingLeft: Dimensions.get('window').width / 24
    }
})

export default styles;