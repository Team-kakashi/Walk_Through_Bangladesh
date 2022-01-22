import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
//import styled from "styled-components/native";

/*const CameraView = styled(Camera)'
width: 100%;
height: 100%;
';*/

const CameraV = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
      <SafeAreaView>
    <View >
      <Camera style={styles.cam} type={type}>

          <TouchableOpacity
            
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
    
      </Camera>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
    background: {
      flex: 1,
      marginTop: 40,
     //marginLeft: 80,
     padding: 20,
     alignItems: 'center',
    },
    cam: {
        height: "100%",
         width: "100%",
        },

    text: { 
    alignItems: "center",
    backgroundColor: "#00FFDD",
    padding: 10,
    },
        

   
  });

export default CameraV;