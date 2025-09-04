import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';

export default function App() {
const age = 16;
const licenseAge = 0;
let feedback = '';
if (age >= 18) 
  if (licenseAge >= 3){
  
        
          feedback = 'You are allowed to drive and you are experienced.'
        }else 
       {feedback = 'You are allowed to drive but you are not experienced.'
          
        } else {
          feedback = 'You are not allowed to drive yet.'
        }
        
        

        


        




  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Image style={styles.Image} source ={{uri:'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg'}} />
     <Text style={styles.response}>
      {feedback}</Text>{/*This is my message to the user*/}
      
    </View>
    </SafeAreaView>
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
    color:"black",

  },

  Image:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
});
 