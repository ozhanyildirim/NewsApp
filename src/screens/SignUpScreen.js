import React, { Component } from 'react';
import { View, Text ,Button,StyleSheet} from 'react-native';

const SignUpScreen = () => {
    return(
         <View style={styles.container}> 
            
       
        <View style={styles.header}>
        <Text style={styles.text}>
                        SIGN UP SCREEN
             </Text>
            
        </View>
        <View style={styles.footer}>
        <Text style={styles.text_footer}>Footer Section...</Text>
        </View>
        
         </View>
         


    )
}

export default SignUpScreen;

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'pink',

    },
    text : {
        fontSize : 45,
        fontWeight :'bold',
    },
    text_footer:{
        fontSize : 20,
        fontWeight :'bold',
        justifyContent: 'center',
      
    },
    header : {
        flex : 1,
        justifyContent :'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
        backgroundColor:'pink'
    },
    footer: {
        flex :2 ,
        backgroundColor : '#fff',
        borderTopLeftRadius : 30,
  borderTopRightRadius:30,
  paddingHorizontal:20,
  paddingVertical:30
    }





});