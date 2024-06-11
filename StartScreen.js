// components/StartScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartScreen = ({ onStart }) => {
  return (
    <View style={styles.container}>
   
      <Button title="Start Quiz" onPress={onStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop:0,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default StartScreen;
