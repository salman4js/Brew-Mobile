import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    inputView: {
        width: '120%',
        height: 44,
        backgroundColor: "#f1f3f6",
        borderRadius: 8,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 2
    },
    inputFieldArea: {
        paddingLeft: 15,
        paddingRight: 80,
        paddingTop: 30,
        marginBottom: 10
    },
    loader: {
        paddingTop: Dimensions.get('window').height / 6,
        alignItems: 'center',
        marginBottom: 40
    },
    picker : {
        backgroundColor: 'white',
        borderRadius : 10,
        marginTop : 5,
        width: '120%'
    },
})

export default style;