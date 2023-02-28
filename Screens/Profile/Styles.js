import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    headlineContainer: {
        paddingLeft: 180
    },
    textBoxView:{
      marginTop: 20,
      flexDirection: 'row'
    },
    textBox: {
      flex: 1,
      height: 30,
      borderRadius: 10,
      backgroundColor: "white",
      marginLeft: 10,
      marginRight: 10,
      paddingHorizontal: 10
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
        paddingLeft : 50,
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
})

export default style;