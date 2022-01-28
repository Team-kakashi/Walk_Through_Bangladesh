/** @format */

import * as React from "react";
//import { TextInput } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import {
  openImagePickerAsync,
  openCameraPickerAsync,
  Returnurl,
} from "./ImagePicker";

const HotelInfo = ({ navigation }) => {
  const [hotelName, setHotelName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [roomType, setRoomType] = React.useState("");
  const [capacity, setCapacity] = React.useState("");
  const [acOption, setAcOption] = React.useState("");
  const [roomdetails, setRoomDetails] = React.useState("");
  const [discountOffer, setDiscountOffer] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [rent, setRent] = React.useState("");

  const onPress = () => {
    submitData();
  };

  const onImagePick = async () => {
    await openImagePickerAsync();
    console.log(Returnurl);
    newrender();
  };
  const onCameraPick = async () => {
    await openCameraPickerAsync();
    console.log(Returnurl);
    newrender();
  };
  let defaultimg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTw8BbwCUZs0OY8-mL_AUlUIRSWZWGMrwt8sT39lCI7CbqPIdGC-PmOSKg4wOOj-9xR5o&usqp=CAU";

  const submitData = () => {
    fetch("http://192.168.1.104:3000/hotelmanager", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelName: hotelName,
        address: address,
        roomType: roomType,
        capacity: capacity,
        rent: rent,
        acOption: acOption,
        roomdetails: roomdetails,
        discountOffer: discountOffer,
      }),
    })
      .then((res) => res.status)
      .then((data) => {
        //console.log(res.status())
        if (data == 200) {
          console.log(data);
          // navigation.navigate("Login")
          Alert.alert("successfully submitted !");
        } else Alert.alert("Something Went Wrong, Try again !");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("route can't be found");
      });
  };

  const newrender = () => {
    setPhoto(Returnurl);
  };

  return (
    <View style={styles.baseText}>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.title}>Add Hotel & Room Information</Text>
          <TextInput
            style={styles.input}
            label="HotelName"
            value={hotelName}
            placeholder="Hotel Name"
            onChangeText={(hotelName) => setHotelName(hotelName)}
          />
          <TextInput
            style={styles.input}
            label="Address"
            value={address}
            placeholder="Address"
            onChangeText={(address) => setAddress(address)}
          />

          <Text>Select A Room Type :</Text>

          <Picker
            style={styles.dropdown}
            selectedValue={roomType}
            onValueChange={(itemValue) => setRoomType(itemValue)}
          >
            <Picker.Item label="Delux" value="Delux" />
            <Picker.Item label="Normal" value="Normal" />
          </Picker>
          <TextInput
            style={styles.input}
            label="Capacity"
            value={capacity}
            placeholder="Capacity"
            onChangeText={(capacity) => setCapacity(capacity)}
          />

          <TextInput
            style={styles.input}
            label="Rent"
            value={rent}
            placeholder="Rent"
            onChangeText={(rent) => setRent(rent)}
          />

          <Text>Select AC Option :</Text>

          <Picker
            style={styles.dropdown}
            selectedValue={acOption}
            onValueChange={(itemValue) => setAcOption(itemValue)}
          >
            <Picker.Item label="AC" value="AC" />
            <Picker.Item label="Non_AC" value="Non_AC" />
          </Picker>

          <TextInput
            style={styles.input}
            label="RoomDetails"
            placeholder="Room Details"
            value={roomdetails}
            onChangeText={(roomdetails) => setRoomDetails(roomdetails)}
          />

          <TextInput
            style={styles.input}
            label="DiscountOffer"
            placeholder="Discount Offers"
            value={discountOffer}
            onChangeText={(discountOffer) => setDiscountOffer(discountOffer)}
          />

          <TouchableOpacity style={styles.button} onPress={onCameraPick}>
            <Text>Take A Photo </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onImagePick}>
            <Text>Upload A Photo</Text>
          </TouchableOpacity>

          <Image
            style={styles.imageArea}
            source={{ uri: photo == "" ? defaultimg : photo }}
          ></Image>

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>
              Add {"\n"} {"\n"} {"\n"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    //marginLeft: 80,
    padding: 20,
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#00FFDD",
    padding: 10,
    marginBottom: 5,
  },

  title: {
    alignItems: "center",
    marginBottom: 15,
    padding: 5,
    textAlign: "center",
  },

  input: {
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
  },

  dropdown: {
    marginBottom: 5,
    borderWidth: 2,
    padding: 10,
  },

  imageArea: {
    height: "7%",
    width: "40%",
  },

  footer: {
    marginTop: 40,
    alignItems: "flex-end",
    padding: 10,
  },
});

export default HotelInfo;
