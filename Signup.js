import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker' ;
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert } from "react-native";

const Register = () => {
    const [name, setName] = React.useState('');
    const [contactno, setContactno] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pickerValue, setPickerValue] = React.useState('Select User Type');
  
    const onPress = () => {console.log(name)
                          console.log(contactno)
                          console.log(email)
                          console.log(password)
                        console.log(pickerValue)
                        submitData()};

    const onPressChange = () => {console.log("login pressed")}


    const submitData = ()=>{
      Alert.alert("submit hosse");
      fetch("http://127.0.0.1:3000/signup",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            
              name: name,
              email: email,
              password: password,
              contactNo: contactno,
              userType: pickerValue,
              
          })
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
          //Alert.alert(`${data.name} is saved successfuly`)
          //navigation.navigate("Home")
      })
      .catch(err=>{
        console.log(err);
        //Alert.alert(err)
    })
}

    return (
    <View style={styles.baseText}>
    <SafeAreaView>
        <Text style={styles.title}>
           Sign UP
        </Text>
      <TextInput
      style={styles.input}
        label="Name"
        value={name}
        placeholder="Name"
        onChangeText={name => setName(name)}
      />
      <TextInput
      style={styles.input}
        label="Contact No"
       value={contactno}
       placeholder="Contact Info"
        onChangeText={contactno => setContactno(contactno)}
      />

        <Text >
           Select A User Type :
        </Text>

      <Picker
        style= {styles.dropdown}
        selectedValue={pickerValue}
        onValueChange ={(itemValue) => setPickerValue(itemValue)}
      >
        <Picker.Item label="Traveller" value="Traveller" />
        <Picker.Item label="Hotel Manager" value="HotelManager" />
        <Picker.Item label="Blogger" value="Blogger" />
        <Picker.Item label="Tour Guide" value="TourGuide" />
        <Picker.Item label="Vehicle Owner" value="VehicleOwner" />

      </Picker>
      <TextInput
      style={styles.input}
        label="Email"
        value={email}
       placeholder="Email"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
      style={styles.input}
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />

       <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>
          <View style={styles.footer}>
              <Text>Already Registerd?</Text>
              <TouchableOpacity
              style={styles.button}
              onPress={onPressChange}
              >
              <Text>Login</Text>
              </TouchableOpacity>
          </View>
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
  
  export default Register;