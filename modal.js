import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>soy un modal</Text>
            <Button title="Cerrar modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
            <Button title="Abrir modal" onPress={() => setModal(!modal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#f00',
    flex:1,
    margin: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
  },
});
