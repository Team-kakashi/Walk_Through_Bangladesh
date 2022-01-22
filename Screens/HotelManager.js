import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker' ;
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert, ScrollView } from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const HotelInfo = ({ navigation }) => {
    const [hotelName, setHotelName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [roomType, setRoomType] = React.useState('');
    const [capacity, setCapacity] = React.useState('');
    const [acOption, setAcOption] = React.useState('');
    const [roomdetails, setRoomDetails] = React.useState('');
    const [discountOffer, setDiscountOffer] = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const [rent, setRent] = React.useState('');
  
    const onPress = () => {
                        submitData()
                      
    };

    const onPressChange = () => {console.log("login pressed")
                              navigation.navigate("Login")}


    const submitData = ()=>{
      
      fetch("http://192.168.0.193:3000/hotelmanager",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            
            hotelName: hotelName,
            address : address,
            roomType: roomType,
            capacity: capacity,
            rent: rent,
            acOption: acOption,
            roomdetails: roomdetails,
            discountOffer: discountOffer,
            
              
          })
      })
      .then(res=> res.status)
      .then(data=>{
        //console.log(res.status())
        if(data==200){
          console.log(data);
         // navigation.navigate("Login")
          Alert.alert("successfully submitted !");
        }
        else 
        Alert.alert("Something Went Wrong, Try again !");
      })
      .catch(err=>{
        console.log(err);
        Alert.alert("route can't be found");
    })
}

    return (
    <View style={styles.baseText}>
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
           Add Hotel & Room Information
        </Text>
      <TextInput
      style={styles.input}
        label="HotelName"
        value={hotelName}
        placeholder="Hotel Name"
        onChangeText={hotelName => setHotelName(hotelName)}
      />
      <TextInput
      style={styles.input}
        label="Address"
       value={address}
       placeholder="Address"
        onChangeText={address => setAddress(address)}
      />

        <Text >
           Select A Room Type :
        </Text>

      <Picker
        style= {styles.dropdown}
        selectedValue={roomType}
        onValueChange ={(itemValue) => setRoomType(itemValue)}
      >
        <Picker.Item label="Delux" value="Delux" />
        <Picker.Item label="Normal" value="Normal" />

      </Picker>
      <TextInput
      style={styles.input}
        label="Capacity"
        value={capacity}
       placeholder="Capacity"
        onChangeText={capacity => setCapacity(capacity)}
      />

<TextInput
      style={styles.input}
        label="Rent"
        value={rent}
       placeholder="Rent"
        onChangeText={rent => setRent(rent)}
      />

        <Text >
           Select AC Option :
        </Text>

      <Picker
        style= {styles.dropdown}
        selectedValue={acOption}
        onValueChange ={(itemValue) => setAcOption(itemValue)}
      >
        <Picker.Item label="AC" value="AC" />
        <Picker.Item label="Non_AC" value="Non_AC" />

      </Picker>

      <TextInput
      style={styles.input}
        label="RoomDetails"
        placeholder="Room Details"
        value={roomdetails}
        onChangeText={roomdetails => setRoomDetails(roomdetails)}
      />

      <TextInput
      style={styles.input}
        label="DiscountOffer"
        placeholder="Discount Offers"
        value={discountOffer}
        onChangeText={discountOffer => setDiscountOffer(discountOffer)}
      />

       <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Add {"\n"} {"\n"} </Text>
      </TouchableOpacity>
          
          </ScrollView>
      </SafeAreaView>
      </View>

    );
  };

  const styles = StyleSheet.create({
  
    baseText: {
      flex: 1,
      marginTop: 40,
     //marginLeft: 80,
     padding: 20,
     alignItems: 'center',
    },

    button: {
      alignItems: "center",
      backgroundColor: "#00FFDD",
      padding: 10
    },
    
    title: {
      alignItems: "center",
      marginBottom: 20,
      padding: 10,
      textAlign: 'center',
    },

    input: {
      height: 40,
      width : 125,
      margin: 22,
      borderWidth: 1,
      padding: 10,
      
    },

    dropdown: {
      height: 40,
      width : 125,
      margin: 22,
      borderWidth: 2,
      padding: 10,
      
    },

    footer: {
      marginTop: 40,
     alignItems: 'flex-end',
      padding: 10,
      
    },

  });
  
  export default HotelInfo;