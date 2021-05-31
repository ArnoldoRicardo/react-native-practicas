import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.photo}
        source={{uri: 'http://placekitten.com/200/200'}} >
        <Text>Soy un texto en una imagen</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
