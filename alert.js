import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

const crearDialogo = () => Alert.alert('Hola', 'soy un alert', [
  {
    text: 'Cancelar',
    onPress: () => console.log('cancelar'), 
    style: 'cancel',
  },
  {
    text: 'Aceptar',
    onPress: () => console.log('aceptar'),
  }
], {cancelable: false})


export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title='Abrir dialogo' onPress={crearDialogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
});
