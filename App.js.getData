import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () =>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setLoading(false)
      setUsers(await response.data)
    }
    getData()
  },[]);
  
  
  if (loading) {
    return <View style={styles.center}><Text>Cargadando..</Text></View>
  }
  return (
    <View style={styles.container}>
    <FlatList
      data={users}
      renderItem={({item})=> <Text style={styles.item}>{item.name}</Text>}
      keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
