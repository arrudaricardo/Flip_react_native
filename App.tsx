import React from 'react';
import AccHook from "./hooks/AccHook"
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let {x,y,z} = AccHook()
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(x)}</Text>
      <Text>{JSON.stringify(y)}</Text>
      <Text>{JSON.stringify(z)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
