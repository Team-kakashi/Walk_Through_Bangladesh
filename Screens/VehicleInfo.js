import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker' ;
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert, ScrollView } from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const VehicleInfo = ({ navigation }) => {
    const [vehicleType, setVehicleType] = React.useState('');
    const [vehicle, setVehicle] = React.useState('');
    const [licenseNo, setLicenseNo] = React.useState('');
    const [capacity, setCapacity] = React.useState('');
    const [route, setRoute] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [acOption, setAcOption] = React.useState('');
    const [discountOffer, setDiscountOffer] = React.useState('');
    const [photo, setPhoto] = React.useState('');
  
    const onPress = () => {
        console.log(vehicleType)
        console.log(vehicle)
        console.log(licenseNo)
        console.log(capacity)
        console.log(route)
        console.log(price)
        console.log(acOption)
        console.log(discountOffer)
        console.log(photo)
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
           vehicleType: vehicleType,
           vehicle: vehicle,
           licenseNo: licenseNo,
           capacity: capacity,
           route: route,
           price: price,
           acOption: acOption,
           discountOffer: discountOffer,
           photo: photo,
              
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
           Add Vehicle Information
        </Text>

        <Text>
           Select Vehicle Type
        </Text>

        <Picker
        style= {styles.dropdown}
        selectedValue={vehicleType}
        onValueChange ={(itemValue) => setVehicleType(itemValue)}
      >
        <Picker.Item label="Car" value="Car" />
        <Picker.Item label="MicroBus" value="MicroBus" />
        <Picker.Item label="Bus" value="Bus" />

      </Picker>

      <TextInput
      style={styles.input}
        label="Vehicle"
        value={vehicle}
        placeholder="Vehicle Model"
        onChangeText={vehicle => setVehicle(vehicle)}
      />

     <TextInput
      style={styles.input}
        label="LicenseNo"
        value={licenseNo}
        placeholder="Vehicle License Number"
        onChangeText={licenseNo => setLicenseNo(licenseNo)}
      />

       <TextInput
      style={styles.input}
        label="Capacity"
        value={capacity}
       placeholder="Capacity"
        onChangeText={capacity => setCapacity(capacity)}
      />

      <TextInput
      style={styles.input}
        label="Route"
       value={route}
       placeholder="Select Route"
        onChangeText={route => setRoute(route)}
      />
      

        <Text >
           Select AC Option :
        </Text>

 <Picker
        style= {styles.dropdown}
        selectedValue={acOption}
        onValueChange ={(itemValue) => setAcOption(itemValue)}
      >
        <Picker.Item label="AC" value="Delux" />
        <Picker.Item label="Non_AC" value="Non_AC" />

      </Picker>

      <TextInput
      style={styles.input}
        label="Price"
       value={price}
       placeholder="Price"
        onChangeText={price => setPrice(price)}
      />

      <TextInput
      style={styles.input}
        label="DiscountOffer"
       value={discountOffer}
       placeholder="Discount"
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
  
  export default VehicleInfo;