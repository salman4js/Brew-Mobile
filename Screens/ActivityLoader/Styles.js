import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    loader: {
        paddingTop: Dimensions.get('window').height / 3,
        alignItems: 'center',
        marginBottom: 20
    }
})

export default styles;