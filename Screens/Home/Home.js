import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView} from 'react-native';

// Importing styles!
import styles from './Styles';

// Importing services!
import { allRooms } from '../Services/Services';

// Importing Dumb components!
import Panel from '../Cards/Card';
import Modal from '../Modal/Modal';
import Count from '../Count/Count';


const Home = (props) => {

    // Lodge Room data handler!
    const[data, setData] = useState([]);
    const [total, setTotal] = useState();
    const [booked, setBooked] = useState();
    const [available, setAvailable] = useState();

    // Handle Error Modal!
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState();

    // Handle Modal Behaviour!
    function handleModal(){
        setModal(!modal);
    }

    // Get Lodge Data!
    async function getData(){
        const data = {
            userid : props.userid,
            token: props.token
        }
        const result = await allRooms(data);
        if(result.success){
            setData(result.message);
            setTotal(result.message.length);
            setAvailable(result.countAvailability);
        } else {
            setMessage(result.message);
            handleModal() // Error handling!
        }
    }

    // Modal options config
    const modalConfig = {
        modal: {
        isRequired: modal
        },
        isHeaderRequired: false,
        content: true,
        message : {
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
        }
    }


    // Constructor!
    useEffect(() => {
        // Calling the all lodge API endpoint function!
        getData();
    }, [])

    return(
        <View>
            <Count available = {available} total = {total} booked = {total - available} />
            {
                modal ? (
                    <Modal config = {modalConfig} handleModal = {() => handleModal()} />
                ) : (
                    <ScrollView style = {styles.cardView}>
                        {
                            data.map((item,key) => {
                                return(
                                    <Panel title = {item.roomno} engaged={item.isOccupied} roomtype={item.suiteName} bedcount={item.bedCount} 
                                    roomid={item._id} id={props.token} lodgeid = {props.userid} price = {item.price} 
                                    prebook = {item.preBooked} prevalid = {item.preValid} discount = {item.discount} />
                                )
                            })
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

export default Home;