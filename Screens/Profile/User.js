import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './Styles';
import Panel from '../Cards/Card';
import {userData} from '../Services/Services';

// Importing lang file
import lang from '../root/lang';

const User = (props) => {
  
    // User Data State handler!
    const [userdata, setUserdata] = useState([]);
    const [rate, setRate] = useState();
    
    // Input State handler
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    // Error Handling!
    const [error, setError] = useState(false);
    const [message, setMessage] = useState();
    
    // Handle Error Modal
    function handleModal() {
      setError(!error);
    }
  
    // Service call
    async function userData(){
    // Loader 
    const data = {
      token: props.token
    }
    const result = await userData(data, props.userid);
    if(result.success){
          setUserdata(result.message);
          setRate(result.totalAmount);
      } else {
          setMessage(result.message);
          handleModal(); // Open up a error modal
      }
    }
  
    return(
        <View style = {{backgroundColor: 'rgb(9,14,44)', flex: 1 }}>
            <View style={style.textBoxView}>
                <View style={style.textBox}>
                    <TextInput placeholder= {lang.user.placeholder.date1} style={{justifyContent: 'flex-start',}} value = {startDate} onChangeText = {(startDate => setStartDate(startDate))} />
                </View>
                <View style={style.textBox}>
                    <TextInput placeholder= {lang.user.placeholder.date2} style={{justifyContent: 'flex-end',}}  value = {endDate} onChangeText = {(endDate => setEndDate(endDate))} />
                </View>
            </View>
            <View style = {style.buttonHolder}>
              <TouchableOpacity style = {style.buttonSuccess}>
                <Text style = {style.buttonIn}>
                    {lang.user.userSearch}
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default User;