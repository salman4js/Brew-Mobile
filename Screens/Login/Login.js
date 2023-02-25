import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Keyboard } from 'react-native';

// Importing Lang file!
import login from '../Login/lang';

// Importing Styles for login screen!
import styles from './Styles';

// Importing Modal
import Modal from '../Modal/Modal';

// Importing Loader
import Loader from '../ActivityLoader/Loader';

// Importing services!
import {processLogin} from '../Services/Services';

const Login = ({ navigation }) => {

  // Loader handler!
  const [loader, setLoader] = useState(false);

  // Button State handler!
  const [button, setButton] = useState(false);

  // Modal State handler!
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState();

  // Process Login Info and user info handler!
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function loginUser() {
    // Initiate the loader and button state!
    setLoader(!loader);
    setButton(!button);
    // Disable the keyboard!
    Keyboard.dismiss();
    const data = {
      username: username,
      password: password
    }
    const result = await processLogin(data);
    if (result.success) {
      setLoader(false);
      setButton(false);
      navigation.navigate("Footer",{
        userid: result.hostId,
        token: result.token
      })
    } else {
      setLoader(false);
      setButton(false);
      // Display thr error modal;
      handleModal(result.message);
      // Set the value state back to null
      setUsername(null);
      setPassword(null);
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

  // Modal Handler!
  function handleModal(message){
    setMessage(message)
    setModal(!modal)
  }

  return (
    <View style={styles.container}>
      <Modal config = {modalConfig} handleModal = {() => handleModal()}/>
      <View style={styles.headline}>
        <Text style={styles.langHeadline}>
          {login.headerTitle}
        </Text>
        <Text style={styles.smallBranding}>
          {login.poweredTitle}
        </Text>
      </View>
      <View style={styles.inputFieldArea}>
        <View style={styles.inputView}>
          <TextInput placeholder={login.usernameField} value={username} onChangeText={username => setUsername(username)} />
        </View>
        <View style={styles.inputView}>
          <TextInput placeholder={login.passwordField} value={password} onChangeText={password => setPassword(password)} />
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableOpacity disabled = {button} style={button ? styles.buttonSecondary : styles.buttonSuccess} onPress={() => loginUser(username, password)}>
          <Text style={styles.buttonIn}>
            {login.logIn}
          </Text>
        </TouchableOpacity>
      </View>
      {
        loader ? (
          <View>
            <Loader size={44} style={styles.loader} />
          </View>
        ) : (
          null
        )
      }
    </View>
  )


}

export default Login;