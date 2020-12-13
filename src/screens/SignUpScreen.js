import React, { Component } from 'react';
import { View, Text ,StyleSheet, StatusBar, TextInput,Platform ,TouchableOpacity,Dimensions, Image} from 'react-native';

const SignUpScreen = ({navigation}) => {

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle = "light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header}>Kayıt Ol !</Text>
        </View >


        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <TextInput placeholder="Email adresiniz"
            style={styles.TextInput}
            autoCapitalize="none" />
          </View >
          <Text style={[styles.text_footer ,{ marginTop : 35}]} >Şifre</Text>
            <View style={styles.action}>
            <TextInput placeholder="Şifrenizi Girin"
            secureTextEntry={true}
            style={styles.TextInput}
            autoCapitalize="none"/>
     </View>
     
     <Text style={[styles.text_footer ,{ marginTop : 35}]} >Şifre Doğrula</Text>
              <View style={styles.action}>
            <TextInput placeholder="Şifrenizi Tekrar Girin"
            secureTextEntry={true}
            style={styles.TextInput}
            autoCapitalize="none"/>
     </View >
     <View  style={styles.opacity}> 
        <TouchableOpacity onPress={() => navigation.goBack()}  > 
         <Image 
           source={require('/app/app/assets/kayit.png')} 
           />
           </TouchableOpacity>
       </View>
     </View>
      
       </View>
      // </View>
 );
 };

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
    },
    opacity : {
      padding : 30,
      justifyContent : 'center',
      alignItems : 'center'
    },
    textInput :{
      flex:1,
      marginTop:Platform.OS === 'ios' ? 0 : -12,
      color :'#05375a',
    },
    text_footer : {
      color : '#05375a',
      fontSize :18
    },
    text_header : {
      color : '#fff',
      fontWeight : 'bold',
      fontSize : 30,
    
    },
    action :{
      flexDirection:'row',
      marginTop:10,
      borderBottomWidth:1,
      borderBottomColor:'#f2f2f2',
      paddingBottom:5,
    },





});