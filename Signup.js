import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

const Register = () => {
    const [name, setName] = React.useState('');
    const [contactno, setContactno] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    return (
    <Text style={styles.baseText}>
    <SafeAreaView>
        <Text>
            Sign UP
        </Text>
      <TextInput
      style={styles.input}
        label="Name"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
      style={styles.input}
        label="Contact No"
        value={contactno}
        onChangeText={contactno => setContactno(contactno)}
      />
      <TextInput
      style={styles.input}
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
      style={styles.input}
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />

        <Button
              title="SignUp"
              // buttons
            />

      </SafeAreaView>
      </Text>
    );
  };

  const styles = StyleSheet.create({
  
    baseText: {
      marginTop: 40,
     marginLeft: 80,
     padding: 20,
     alignItems: 'center',
    },
    
    input: {
      height: 40,
      width : 125,
      margin: 22,
      borderWidth: 1,
      padding: 10,
      
    },
  });
  
  export default Register;