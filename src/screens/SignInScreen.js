import React, { Component } from 'react';
import { View, Text ,StyleSheet, TextInput,Platform ,TouchableOpacity,Dimensions, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import {AuthContext} from '/app/app/components/context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Users from '/app/app/modal/user';
import {useTheme} from 'react-native-paper'

const SignInScreen = ({navigation }) => {

  const [data,setData] = React.useState({
    username : '',
    password : '',
    check_textInputChange : false,
    secureTextEntry : true,
    isValidUser : true,
    isValidPassword : true,
  });

  const {colors} = useTheme();



  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser : true,
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser : false,
        });
    }
}
const handleValidUser = (val) => {
  if(val.trim().length >= 4) {
    setData ({
      ...data,
      isValidUser : true
    });
   } 
   else {
      setData ({
        ...data,
        isValidUser : false
      });
    
  }

}
const handlePasswordChange = (val) => {
  if(val.trim().length >= 8) {
  setData({
    ...data,
    password: val,
    isValidPassword :true,
  });}
  else {
    setData ({
      ...data,
      password : val,
      isValidPassword : false,
    });
  
}
}
const updateSecureTextEntry = () => {
  setData({
    ...data,
    secureTextEntry: !data.secureTextEntry,
  });
}

  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (userName,password) => {
    const foundUser = Users.filter (item => {
      return userName == item.username && password == item.password;
    });
     
    if(data.username.length == 0 ||data.password.length ==0){
      Alert.alert('Hatalı Giriş !' , 'Kullanıcı adı veya şifre boş bırakılamaz.',[
        {text : 'Tamam'}
      ]);
      return;
    }
    if(foundUser.length == 0){
      Alert.alert('Hatalı Giriş !' , 'Kullanıcı adı veya şifre yanlış.',[
        {text : 'Tamam'}
      ]);
      return;
    }
    signIn(foundUser);
  }

  return(
    
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle = "light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Hoş Geldiniz !</Text>
      </View >



      <View style={[styles.footer , {backgroundColor : colors.background}]}>
        <Text style={[styles.text_footer,{color: colors.text}]}>Kullanıcı Adı</Text>
        <View style={styles.action}>
          <FontAwesome 
          name="user-o"
          color={colors.text}
          size={20}
          />
          <TextInput placeholder="Kullanıcı adınız"
              placeholderTextColor="#666666"
          style={[styles.textInput,{paddingLeft : 8},{color:colors.text}]}
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? 
          <Feather 
          name="check-circle"
          color="green"
          size={20}
          />
          : null }
    </View >
    { data.isValidUser ? null : 

    <Text style={styles.errorMsg}>Kullanıcı adı 4 karakterden uzun olmalı. </Text> 
    }
            <Text style={[styles.text_footer ,{ marginTop : 35} , {color: colors.text}]} >Şifre</Text>
            <View style={styles.action}>
            <FontAwesome 
          name="lock"
          color={colors.text}
          size={20}
          />
          <TextInput placeholder="Şifrenizi Girin"
            placeholderTextColor="#666666"


          secureTextEntry={data.secureTextEntry ? true : false}
          style={[styles.textInput,{paddingLeft : 8},{color:colors.text}]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity 
          onPress = {updateSecureTextEntry}
         
          >
            {data.secureTextEntry ? 
              <Feather 
              name="eye-off"
              color={colors.text}
              size={20}
              />
              :
              <Feather 
              name="eye"
              color={colors.text}
              size={20}
              />
          }
          
           </TouchableOpacity>
   </View>
   {data.isValidPassword ? null :
   <Text style={styles.errorMsg}>Parola 8 karakterden uzun olmalı. </Text>
   }
    <View> 
      <TouchableOpacity style={styles.button2}
      onPress={() => {loginHandle(data.username,data.password)}} > 
        <Text style={styles.text1}> Giriş Yap </Text>
         </TouchableOpacity>
     </View>
  
 { /*   {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

 */}

<View style={[styles.button1,{paddingTop:7}]}>
<Text style={[styles.text_footer , {paddingTop :10},{color: colors.text}] }> Hesabınız yok mu ? </Text> 
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

},
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},



});
