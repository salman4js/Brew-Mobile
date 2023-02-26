import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Panel from '../Cards/Card';
import Modal from '../Modal/Modal';
import Loader from '../ActivityLoader/Loader';

// Importing services
import { getUserDB, getUserDbRoom } from '../Services/Services';

const History = (props) => {

    // Data handler
    const [data, setData] = useState([]);

    // Loader state handler
    const [loader, setLoader] = useState(false);

    // User Room Data handler!
    const [userdata, setUserdata] = useState([]);

    // Modal handler
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState()

    
    function handleModal(){
        setModal(!modal);
    }

    // Service API call
    async function getUserData() {
        setLoader(true);
        const data = {
            token: props.token
        }
        const result = await getUserDB(data, props.userid);
        if (result.success) {
            setData(result.message);
            setLoader(false);
        } else {
            // Error handling
            setMessage(result.message)
            handleModal()
        }
    }

    // Servie API call for the user db room data
    async function showDetails(id){
        setLoader(true);
        const data = {
            roomid: id
        }
        const result = await getUserDbRoom(data, props.userid);
        if(result.success){
            setUserdata(result.message);
            setLoader(false);
            handleModal();
        } else {
            setMessage(result.message)
            setLoader(false)
            handleModal()
        }
    }

    // Panel Config!
    const panelConfig = {
        dashboard: false,
        history: true,
        button: {
            isRequired: false,
            id: "Show Details",
            isPrimary: true
        },
        buttonFunction: {
            isRequired: true,
            id: "Details"
        }
    }

    // Modal Config
    const modalConfig = {
        modal: {
            isRequired: true
        },
        isHeaderRequired: false,
        content: true,
        message: {
            isRequired: true,
            message: message
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
            isRequired: false,
            content: userdata
        }
    }

    // Constructor
    useEffect(() => {
        getUserData()
    }, [])


    return (
        <View style={{ backgroundColor: 'rgb(9,14,44)', flex: 1 }}>
            {
                modal ? (
                    <Modal config = {modalConfig} handleModal = {() => handleModal()} />
                ) : (
                    <ScrollView style={{ marginBottom: 20 }}>
                        {
                            loader ? (
                                <Loader size={120} />
                            ) : (
                                data.map((item, key) => {
                                    return (
                                        <Panel roomid = {item.room} panelConfig={panelConfig} title={item.roomno} name={item.username} phonenumber={item.phonenumber}
                                            secphone={item.secondphonenumber} adults={item.adults} childrens={item.childrens}
                                            checkin={item.dateofcheckin} aadharcard={item.aadharcard} checkout={item.dateofcheckout}
                                            stayeddays={item.stayedDays} prebooked={item.prebooked} discount={item.discount}
                                            advance={item.advance} bill={item.bill} dishBill={item.dishbill} showDetails = {(id) => showDetails(id)}
                                        />
                                    )
                                })
                            )
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

export default History;