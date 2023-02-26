import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius: 8
    },
    modalButton: {
        backgroundColor: '#222f3e',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginLeft: 10
    },
    modalText: {
        color: 'white',
        fontSize: 14
    },
    textMainContainer:{
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        paddingLeft: Dimensions.get('window').width / 4.2
    }
})

export default styles;