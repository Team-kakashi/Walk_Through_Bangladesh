import * as React from 'react';
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker' ;
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert, ScrollView, Image } from "react-native";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import * as ImagePicker from 'expo-image-picker';

//import {photo, setPhoto} from "./TourGuideProfile"

export let Returnurl='';
export const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    Returnurl= pickerResult.uri;
  }

export const openCameraPickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    console.log(pickerResult);
    Returnurl= pickerResult.uri;
  }
