import React, {Component} from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native'; 
import LoginForm from '.src/components/LoginForm';

export default class App extends Component { 
  render(){
    
    return ( 
      <view style= {styles.container}>
          <LoginForm/>

      <view/>
    );
  }
  
}
const styles = S
StyleSheet.create({  
 container:{
    flex:1,
    justifyContent:'center'   

     


  }

  
});




 