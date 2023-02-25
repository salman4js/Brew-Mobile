import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNModal from 'react-native-modal';

// Importing Styles
import styles from './Styles';

const Modal = (props) => {

    return (
        <RNModal isVisible={props.config.modal.isRequired}
            animationIn='zoomIn'
            animationOut='zoomOut'>
            {
                props.config.modal.isRequired && props.config.content && props.config.message.isRequired && (
                    <View style={styles.modalView}>
                        <Text>
                            {props.config.message.message}
                        </Text>
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