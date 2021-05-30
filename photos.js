import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, ActivityIndicator, View, Image, Text} from "react-native";

import axios from 'axios';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color='#00f' />
      <ImageBackground style={styles.photo} source={{ uri: 'https://placekitten.com/200/200'}}>
        <Text>hola estoy en un gatito</Text>
      </ImageBackground>
      <Image
        style={styles.photo}
        source={require('./assets/icon.png')} /><Image
        style={styles.photo}
          source={{uri: 'https://placekitten.com/200/200'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width:200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
