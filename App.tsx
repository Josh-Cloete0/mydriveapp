import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const age = 16;
let feedback = '';
if (age >= 18){
  feedback = 'You are allowed to drive.YAY!'
}else{
  feedback = 'You are not allowed to drive yet.'
}

  return (
    <View style={styles.container}>
     <Text style={styles.response}>
      {feedback}</Text>{/*This is my message to the user*/}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(35, 160, 143)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response:{
    fontSize:28,
    color:'white',

  }
});
 