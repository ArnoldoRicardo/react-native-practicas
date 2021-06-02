import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants'; 

export default function App() {
  const [locacion, setLocacion] = useState({})
  const searchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return Alert.alert('No tenemos permisos para acceder al gps');
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location)
  }
  useEffect(() => {
    searchLocation()
  },[]);
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
      {locacion.coords 
        && <Marker
            coordinate={locacion.coords}
            title='Titulo'
          description='hola soy un marcador' />
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
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
