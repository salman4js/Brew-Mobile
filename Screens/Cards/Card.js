import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import Modal from '../Modal/Modal';

// Importing styles!
import styles from './Styles';


const Panel = (props) => {

    // Modal State handler
    const [modal, setModal] = useState(false);

    function Details() {
        setModal(!modal);
    }

    const modalConfig = {
        modal: {
            isRequired: true
        },
        isHeaderRequired: false,
        content: true,
        message: {
            isRequired: true,
            message: false
        },
        options: {
            buttons: {
                isRequired: true,
                btn1: {
                    id: "OK"
                }
            }
        },
        userdb: {
            isRequired: true,
            content: {
                username: props.name,
                phoneNumber: props.phonenumber,
                secondPhoneNumber: props.secphone,
                adults: props.adults,
                childrens: props.childrens,
                aadharCard: props.aadharcard,
                stayedDays: props.stayeddays,
                prebooked: props.prebooked,
                advance: props.advance,
                discount: props.discount,
                bill: props.bill,
                dishBill: props.dishBill,
                checkin: props.checkin,
                checkout: props.checkout
            }
        }
    }

    return (
        modal ? (
            <Modal config = {modalConfig} handleModal = {() => Details()} />
        ) : (
            <Card>
                <Card.Title>
                    Room No: {props.title}
                </Card.Title>
                <View>
                    {props.panelConfig.dashboard && (
                        <View>
                            <Text style={props.engaged === "true" ? styles.textContainerSuccess : styles.textContainerSecondary}>
                                ENGAGED: {props.engaged.toUpperCase()}
                            </Text>
                            <Text style={styles.textContainer}>
                                Room Type: {props.roomtype}
                            </Text>
                            <Text style={styles.textContainer}>
                                Bed Count: {props.bedcount}
                            </Text>
                            <Text style={styles.textContainer}>
                                Price: {props.price}
                            </Text>
                        </View>
                    )}
                    {props.panelConfig.history && (
                        <View>
                            <Text style={styles.textContainer}>
                                Customer Name: {props.name}
                            </Text>
                            <Text style={styles.textContainer}>
                                Contact Number: {props.phonenumber}
                            </Text>
                            <Text style={styles.textContainer}>
                                Amount Paid: {props.bill}
                            </Text>
                        </View>
                    )}
                </View>
                {props.panelConfig && props.panelConfig.button.isRequired && (
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity disabled={props.panelConfig.button.isPrimary || props.engaged === "true" ? false : true}
                            style={props.panelConfig.button.isPrimary || props.engaged === "true" ? styles.buttonSuccess : styles.buttonSecondary}
                            onPress={() => props.showDetails(props.roomid)}
                        >
                            <Text style={styles.buttonIn}>
                                {props.panelConfig.button.id}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                {props.panelConfig.buttonFunction.isRequired && (
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity disabled={props.panelConfig.button.isPrimary || props.engaged === "true" ? false : true}
                            style={props.panelConfig.button.isPrimary || props.engaged === "true" ? styles.buttonSuccess : styles.buttonSecondary}
                            onPress={() => Details()}
                        >
                            <Text style={styles.buttonIn}>
                                {props.panelConfig.buttonFunction.id}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Card>
        )

    )
}

export default Panel;