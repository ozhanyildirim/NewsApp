import React, { Component } from 'react';
import { View, Text ,StyleSheet, StatusBar, TextInput,Platform ,TouchableOpacity,Dimensions, Image, KeyboardAvoidingView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper'

const SignUpScreen = ({navigation}) => {

  const [data,setData] = React.useState({
    username : '',
    password : '',
    confirm_password : '',
    check_textInputChange : false,
    secureTextEntry : true,
    confirm_secureTextEntry : true,


  });

  const {colors} = useTheme();

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
        });
    } else {
        setData({
            ...data,
            username: val,
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
const handleConfirmPasswordChange = (val) => {
  setData({
    ...data,
    confirm_password: val,
  });
}
const updateSecureTextEntry = () => {
  setData({
    ...data,
    secureTextEntry: !data.secureTextEntry,
  });
}
const updateConfirmSecureTextEntry = () => {
  setData({
    ...data,
    confirm_secureTextEntry: !data.confirm_secureTextEntry,
  });
}

    return(
     
      <View style={styles.container}>
      
        <StatusBar backgroundColor='#009387' barStyle = "light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header}>Kayıt Ol !</Text>
        </View >
        
        <View style={[styles.footer , {backgroundColor : colors.background}]}>
        <ScrollView>
          <Text style={[styles.text_footer ,{color: colors.text}]}>Kullanıcı Adı</Text>
          <View style={styles.action}>
          <FontAwesome 
          name="user-o"
          color={colors.text}
          size={20}
          />
          <TextInput placeholder="Kullanıcı Adınız"
             placeholderTextColor="#666666"
          style={[styles.textInput,{paddingLeft : 8},{color:colors.text}]}
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
          <Text style={[styles.text_footer ,{ marginTop : 20}, {color: colors.text}]} >Şifre</Text>
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
     
     <Text style={[styles.text_footer ,{ marginTop : 35},{color:colors.text}]} >Şifre Doğrula</Text>
              <View style={styles.action}>
              <FontAwesome 
          name="lock"
          color={colors.text}
          size={20}
          />
            <TextInput placeholder="Şifrenizi Tekrar Girin"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={[styles.textInput,{paddingLeft : 8},{color:colors.text}]}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity 
            onPress = {updateConfirmSecureTextEntry}
           
            >
              {data.confirm_secureTextEntry ? 
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
     </View >
     <View  > 
        <TouchableOpacity
        style={styles.button2}
         onPress={() => navigation.goBack()}  > 
                 <Text style={styles.text1}> Kayıt Ol </Text>

           </TouchableOpacity>
       </View>
    
       </ScrollView>   
     </View>
    
       </View>
   
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
    button2 : {
      marginTop : 30,
      marginHorizontal : 36,
      backgroundColor : 'pink',
      borderRadius : 50,
      height : 52,
      alignItems : 'center',
      justifyContent : 'center',
    
    },
    text1: {
      color : '#FFF',
      fontWeight : "500" ,
      fontSize: 20
    },
    




});