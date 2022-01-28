/** @format */

import React from "react";
import { Searchbar } from "react-native-paper";

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  Platform,
  StatusBar,
} from "react-native";

// const isAndroid = Platform.OS === "android";

export default function Test() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
});
