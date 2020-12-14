import React, { Component } from 'react';
import { View, Text ,StyleSheet, TextInput,Platform ,TouchableOpacity,Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import {AuthContext} from '/app/app/components/context';

<HomeScreen/>

const SignInScreen = ({navigation }) => {

  const {signIn} = React.useContext(AuthContext);

  return(
    
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle = "light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Hoş Geldiniz !</Text>
      </View >
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <TextInput placeholder="Email adresiniz"
          style={styles.TextInput}
          autoCapitalize="none"
     
          />
    </View >
            <Text style={[styles.text_footer ,{ marginTop : 35}]} >Şifre</Text>
            <View style={styles.action}>
          <TextInput placeholder="Şifrenizi Girin"
          secureTextEntry={true}
          style={styles.TextInput}
          autoCapitalize="none"/>
   </View>
     <View style={styles.opacity}> 
      <TouchableOpacity onPress={() => {signIn()}} > 
       <Image 
         source={require('/app/app/assets/giris.png')} 
         />
         </TouchableOpacity>
     </View>
  

<View style={[styles.button1,{paddingTop:7}]}>
<Text style={styles.text_footer}> Hesabın yok mu ? </Text> 
</View>
<View style={styles.opacity}> 
      <TouchableOpacity onPress={()=> navigation.navigate('SignUpScreen')}> 
       <Image 
         source={require('/app/app/assets/kayit.png')} 
         />
         </TouchableOpacity>
     </View>
      </View >

    </View>


  );
};


export default SignInScreen;

const styles = StyleSheet.create({

textSign: {
  fontSize : 18,
  fontWeight:'bold'
},
signIn : {
  width : '%100',
  height: 50,
  justifyContent : 'center',
  alignItems:'center',
  borderRadius:10
},
button:{
  alignItems:'center',
  marginTop:50,
},
textInput :{
  flex:1,
  marginTop:Platform.OS === 'ios' ? 0 : -12,
  color :'#05375a',
},
action :{
  flexDirection:'row',
  marginTop:10,
  borderBottomWidth:1,
  borderBottomColor:'#f2f2f2',
  paddingBottom:5,
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
footer : {
  flex :3 ,
  backgroundColor : '#fff',
  borderTopLeftRadius : 30,
  borderTopRightRadius:30,
  paddingHorizontal:20,
  paddingVertical:30
},
header: {
  flex : 1,
  justifyContent :'flex-end',
  paddingHorizontal:20,
  paddingBottom:50,
},
container:{
  flex:1,
  backgroundColor:'#8706a1',
},
button1: {
  marginTop :10,
  alignItems:'center',
  justifyContent:'center',
  color : 'white'
},
opacity: {
  paddingTop : 20,
  justifyContent:'center',
  alignItems:'center',

  
}



});
