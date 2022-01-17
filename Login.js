import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button,View, TouchableOpacity } from "react-native";

const UselessTextInput = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  
  const onPressLogin = () => {console.log("login pressed")
                                navigation.navigate("Login")}

  return (

    <View style={styles.baseText}>
   
    <SafeAreaView>

    
        <Text style={styles.title}>
        LOGIN
        {"\n"}
        {"\n"}
      </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter Your Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Enter Password"
      />
      <Button
            style={styles.button}
              title="LogIn"
              onPress={onPressLogin}
            />

      <View style={styles.footer}>
              <Text>Not Registerd?</Text>
              <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}
              >
              <Text>Sign Up</Text>
              </TouchableOpacity>
      </View>


    </SafeAreaView>
    </View>
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

  button: {
    alignItems: "center",
    backgroundColor: "#00FFDD",
    padding: 10
  },

  footer: {
    marginTop: 40,
   alignItems: 'flex-end',
    padding: 10,
    
  },
});

export default UselessTextInput;