import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RNModal from 'react-native-modal';

// Importing Styles
import styles from './Styles';

// Importing Dumb components!
import TextBox from './TextBox/Textbox';

const Modal = (props) => {

    return (
        <RNModal isVisible={props.config.modal.isRequired}
            animationIn='zoomIn'
            animationOut='zoomOut'>
            {
                props.config.modal.isRequired && props.config.content && props.config.message.isRequired && (
                    <View style={styles.modalView}>
                        {props.config.message.message && (
                            <Text>
                                {props.config.message.message}
                            </Text>
                        )}
                        {props.config.userdata && props.config.userdata.content && (
                            props.config.userdata.content.map((item, key) => {
                                return (
                                    <View>
                                        <Text style={styles.textMainContainer}> Customer Details </Text>
                                        <View
                                            style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                marginBottom: 10
                                            }}
                                        />
                                        <TextBox name={item.username} phoneNumber={item.phonenumber} secondPhoneNumber={item.secondphonenumber}
                                            dateofcheckin={item.dateofcheckin} aadharcard={item.aadharcard} childrens={item.childrens}
                                            dateofcheckout={item.dateofcheckout} adults={item.adults} discount={item.discount} advance={item.advance}
                                        />
                                    </View>
                                )
                            })
                        )}
                        {props.config.userdb && props.config.userdb.content && (
                            <View>
                                <Text style={styles.textMainContainer}> Customer Details </Text>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginBottom: 10
                                    }}
                                />
                                <TextBox name={props.config.userdb.content.username} phoneNumber={props.config.userdb.content.phoneNumber} secondPhoneNumber={props.config.userdb.content.secondPhoneNumber}
                                    dateofcheckin={props.config.userdb.content.checkin} aadharcard={props.config.userdb.content.aadharCard} childrens={props.config.userdb.content.childrens}
                                    dateofcheckout={props.config.userdb.content.checkout} adults={props.config.userdb.content.adults} discount={props.config.userdb.content.discount} advance={props.config.userdb.content.advance}
                                    bill = {props.config.userdb.content.bill} dishBill = {props.config.userdb.content.dishBill}
                                />
                            </View>
                        )}
                        {
                            props.config.options.buttons.isRequired && (
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={styles.modalButton} onPress={props.handleModal}>
                                        <Text style={styles.modalText}>
                                            {props.config.options.buttons.btn1.id}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </RNModal>
    )
}

export default Modal;