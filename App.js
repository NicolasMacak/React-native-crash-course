import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [hodnota, obsluznaFunkcia] = useState('Exkrement');
  return (
    <View style={styles.container}>
      <Text>{hodnota}</Text>
      <Button title='Tlacitko' onPress={() => obsluznaFunkcia('hovienko')} />
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
