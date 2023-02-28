import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        backgroundColor: 'lightblue',
        height: 60,
        paddingRight: 20
    },
    textContainer: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 5,
        paddingLeft: 50,
        paddingRight: 4,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    textUserContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5,
        paddingLeft: Dimensions.get('window').width / 3.5 ,
        paddingRight: 4,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontSize: 16
    }
})


export default styles;