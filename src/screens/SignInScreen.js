import React, { Component } from 'react';
import { View, Text ,StyleSheet, TextInput,Platform ,TouchableOpacity,Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import {AuthContext} from '/app/app/components/context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation }) => {

  const [data,setData] = React.useState({
    email : '',
    password : '',
    check_textInputChange : false,
    secureTextEntry : true
  });
  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
        });
    } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
        });
    }
}

const handlePasswordChange = (val) => {
  setData({
    ...data,
    password: val,
  });
}
const updateSecureTextEntry = () => {
  setData({
    ...data,
    secureTextEntry: !data.secureTextEntry,
  });
}

  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (email,password) => {
    signIn(email,password);
  }

  return(
    
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle = "light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Hoş Geldiniz !</Text>
      </View >



      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome 
          name="user-o"
          color="#05375a"
          size={20}
          />
          <TextInput placeholder="Email adresiniz"
          style={[styles.textInput,{paddingLeft : 8}]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? 
          <Feather 
          name="check-circle"
          color="green"
          size={20}
          />
          : null }
    </View >
            <Text style={[styles.text_footer ,{ marginTop : 35}]} >Şifre</Text>
            <View style={styles.action}>
            <FontAwesome 
          name="lock"
          color="#05375a"
          size={20}
          />
          <TextInput placeholder="Şifrenizi Girin"

          secureTextEntry={data.secureTextEntry ? true : false}
          style={[styles.textInput,{paddingLeft : 8}]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity 
          onPress = {updateSecureTextEntry}
         
          >
            {data.secureTextEntry ? 
              <Feather 
              name="eye-off"
              color="grey"
              size={20}
              />
              :
              <Feather 
              name="eye"
              color="grey"
              size={20}
              />
          }
          
           </TouchableOpacity>
   </View>
     <View> 
      <TouchableOpacity style={styles.button2}
      onPress={() => {loginHandle(data.email,data.password)}} > 
        <Text style={styles.text1}> Giriş Yap </Text>
         </TouchableOpacity>
     </View>
  

<View style={[styles.button1,{paddingTop:7}]}>
<Text style={[styles.text_footer , {paddingTop :10}]}> Hesabınız yok mu ? </Text> 
</View>
<View > 
      <TouchableOpacity style={styles.button2}
      onPress={()=> navigation.navigate('SignUpScreen')}> 
        <Text style={styles.text1}> Kayıt Ol </Text>
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
text1: {
  color : '#FFF',
  fontWeight : "500" ,
  fontSize: 20
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
  fontSize :18 , 
  
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

  
},
button2 : {
  marginTop : 30,
  marginHorizontal : 36,
  backgroundColor : '#8706a1',
  borderRadius : 50,
  height : 52,
  alignItems : 'center',
  justifyContent : 'center',

}



});
