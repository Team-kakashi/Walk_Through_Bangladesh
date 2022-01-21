import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker' ;
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert, ScrollView } from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const GuideInfo = ({ navigation }) => {
    const [addService, setAddSrevice] = React.useState('');
    const [route, setRoute] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [photo, setPhoto] = React.useState('');
  
    const onPress = () => {
        console.log(addService)
        console.log(route)
        console.log(price)
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
            addService: addService,
            route: route,
            price: price,
            photo: photo,
              
          })
      })
      .then(res=> res.status)
      .then(data=>{
        //console.log(res.status())
        if(data==200){
          console.log(data);
          navigation.navigate("Login")
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
           Add Tour Guide's Information
        </Text>
      <TextInput
      style={styles.input}
        label="AddService"
        value={addService}
        placeholder="Add Service"
        onChangeText={addService => setAddSrevice(addService)}
      />
      <TextInput
      style={styles.input}
        label="Route"
       value={route}
       placeholder="Select Route"
        onChangeText={route => setRoute(route)}
      />
      <TextInput
      style={styles.input}
        label="Price"
       value={price}
       placeholder="Price"
        onChangeText={price => setPrice(price)}
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
  
  export default GuideInfo;