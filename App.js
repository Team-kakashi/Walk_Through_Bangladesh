import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer, StackActions } from "@react-navigation/native";
import UselessTextInput from "./Login";
import Register from "./Signup";

export default function App() {
  return (
    //<NavigationContainer>
         /* { <stack.Navigator>
            <stack.Screen name="Login" component={UselessTextInput} />
          </stack.Navigator> }*/
         // <UselessTextInput />
         <Register />
    //</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
