import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './Styles';
import Panel from '../Cards/Card';
import Loader from '../ActivityLoader/Loader'
import {userData} from '../Services/Services';
import Count from '../Count/Count';

// Importing brew-date package
import bwt from 'brew-date';

// Importing lang file
import lang from '../root/lang';

const User = (props) => {
  
    // User Data State handler!
    const [userdata, setUserdata] = useState([]);
    const [rate, setRate] = useState();
    
    // Loader handler
    const [loader, setLoader] = useState(false);
    
    // Input State handler
    const [startDate, setStartDate] = useState(bwt.getFullDate("yyyy/mm/dd"));
    const [endDate, setEndDate] = useState(bwt.getFullDate("yyyy/mm/dd"));
    
    // Error Handling!
    const [error, setError] = useState(false);
    const [message, setMessage] = useState();
    
    // Handle Error Modal
    function handleModal() {
      setError(!error);
    }
    
    // OnPress Handle call
    function handleCall(){
      userValue();
    }
  
    // Service call
    async function userValue(){
    // Loader 
    setLoader(true)
    const data = {
      date1: startDate,
      date2: endDate
    }
    const result = await userData(data, props.userid);
    if(result.success){
          setUserdata(result.message);
          setRate(result.totalAmount);
          setLoader(false);
      } else {
          setMessage(result.message);
          setLoader(false);
          handleModal(); // Open up a error modal
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
    
    // Call the services as soon as the page loads
    useEffect(() => {
      userValue();
    }, [])
    
    
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
              <TouchableOpacity style = {style.buttonSuccess} onPress = {() => handleCall()}>
                <Text style = {style.buttonIn}>
                    {lang.user.userSearch}
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 10}}>
                {
                  loader ? (
                    <Loader size = {120} style = {style.loader} />
                  ) : (
                    userdata.length !== 0 ? (
                      userdata.map((item,key) => {
                        return(
                          <Panel roomid={item.room} panelConfig={panelConfig} title={item.roomno} name={item.username} phonenumber={item.phonenumber}
                              secphone={item.secondphonenumber} adults={item.adults} childrens={item.childrens}
                              checkin={item.dateofcheckin} aadharcard={item.aadharcard} checkout={item.dateofcheckout}
                              stayeddays={item.stayedDays} prebooked={item.prebooked} discount={item.discount}
                              advance={item.advance} bill={item.bill} dishBill={item.dishbill} showDetails={(id) => showDetails(id)}
                          />
                        )
                      })
                    ) : (
                      <View style = {style.noPreview}>
                        <Text style = {style.noPreviewText}>
                            {lang.user.userNoPreview}
                        </Text>
                      </View>
                    )
                  )
                }
            </ScrollView>
            <Count count = {false} rate = {rate} />
        </View>
    )
}

export default User;