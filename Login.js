import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeEmail] = React.useState(null);
  //const [text, onChangePassword] = React.useState(null);

  return (

    <Text style={styles.baseText}>
   
    <SafeAreaView>

    
        <Text style={styles.title}>
        LOGIN
        {"\n"}
        {"\n"}
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={text}
        placeholder="Enter Your Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={text}
        placeholder="Enter Password"
      />
      <Button
              title="LogIn"
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
  },
  
  title: {
    height: 20,
    marginTop: 60,
    marginBottom: 10,
    textAlign: "center"
    
  },

  input: {
    height: 40,
    margin: 22,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;