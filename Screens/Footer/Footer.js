import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Import sub component!
import Home from '../Home/Home';


const Tab = createBottomTabNavigator();


const Footer = ({ route, navigation }) => {
    function TabA() {
        return (
            <Home userid={userid} token = {token} />
        );
    }
    function TabB() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tab B</Text>
            </View>
        );
    }
    function TabC() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tab C</Text>
            </View>
        );
    }


    // LodgeID from the server, passing it to the dashoard endpoint to retrieve data!
    const userid = route.params.userid
    const token = route.params.token

    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    // Default Color is blue you can change it by following props
                    // activeTintColor: '#ff4757',
                    // inactiveTintColor: '#ff6b81',
                    // Default Background Color is white you can change it by following props
                    // activeBackgroundColor: '#ced6e0',
                    // inactiveBackgroundColor: '#ced6e0',
                }
            }
        >
            <Tab.Screen
                name='Dashboard'
                component={TabA}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Tab B'
                component={TabB}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='message' color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Tab C'
                component={TabC}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='person' color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default Footer;

