import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';

export default function App() {
const age = 20;
const licenseAge = 0;
let feedback  = '';//let means that the variable can hold any data type
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
    <View style={styles.content}>
    <Text style={[styles.response,{fontSize:48,fontWeight:'bold',marginBottom:35,textAlign:'center',color:'white'}]}>
      Driving License Checker</Text>{/*custom style and other text component specific styles to the heading */}
      {/*Image component to display an image from the web */}
      <Image style={styles.Image} 
      source ={{uri:'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg'}} />
      <Text style={styles.response}>Age:{age}</Text>
      <Text style={styles.response}>License Age:{licenseAge}</Text>
     <Text style={[styles.response,{fontSize:48,fontWeight:'bold',marginBottom:35,textAlign:'center',color:'blue'}]}>
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

  content:{
    width:'100%',
    alignItems:'center',
  },

  response:{
    fontSize:28,
    color:"black",
    marginTop:5,
    fontWeight:'bold',

  },

  Image:{
    width:"100%",
    height:"50%",
    resizeMode:'contain',
    top:0
  }
});
 