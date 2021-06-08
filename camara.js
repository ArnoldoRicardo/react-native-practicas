import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { Camera } from  'expo-camera';

export default function App() {
  const [permisos, setPermisos] = useState(null)
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);
  

  const getPermisos = async () => {
    const { status } = await Camera.requestPermissionsAsync() 
    setPermisos(status == 'granted');
    console.log(status)
  }
  useEffect(() => {
    getPermisos()
  },[]);
  
  if (permisos === null) {
   return (
    <View style={styles.container}>
      <Text>Esperando permisos...</Text>
    </View>
  ); 
  }if (permisos === false) {
   return (
    <View style={styles.container}>
      <Text>No tenemos acceso a la camara :(</Text>
    </View>
  ); 
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo} >
        <Button title='Voltear' onPress={()=>{
          const { front, back } = Camera.Constants.Type
          const nuevoTipo = tipo === back ? front : back
          setTipo(nuevoTipo)
        }} />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
});
