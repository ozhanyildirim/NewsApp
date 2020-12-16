import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text ,Button,StyleSheet, Dimensions ,Image,TouchableOpacity, } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SplashScreen = ({navigation}) => {
    const {colors} = useTheme();
    return(
         <View style={styles.container}>
             <View style={styles.header}> 
             
                <Image 
                source={require('/app/app/assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
             </View>
             <View style={[styles.footer , {backgroundColor :colors.background}]}>
                 <Text style={[styles.title,
                    { color:colors.text}]}>Lorem Ipsum dolor sit amet!</Text>
                 <Text style={styles.text  }>Hesabınızla Giriş Yapın</Text>
                 <View >
                 <TouchableOpacity style={styles.button2}
                 onPress={()=> navigation.navigate('SignInScreen')}> 
                 <Text style={styles.text1}> Uygulamaya Giriş </Text>
 

                 </TouchableOpacity>
                 </View>
             </View>
         </View>




    )
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
export default SplashScreen;

const styles=StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor: '#8706a1',
    },
    header : {
        flex : 2,
        justifyContent: 'center',
        alignItems : 'center',
    },
    footer : {
        flex:1  ,
        backgroundColor : '#fff',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30,
    },
    logo : {
        width : height_logo,
        height:height_logo,
    },
    title : {
        color : '#05375a',
        fontSize: 30,
        fontWeight : 'bold'
    },
    text : {
        color : 'grey',
        marginTop: 5,

    },
    button : {
        alignItems:'flex-end',
    marginTop:30
},
    signIn:{
        width:150,
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
    fontWeight:'bold'
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
      text1: {
        color : '#FFF',
        fontWeight : "500" ,
        fontSize: 20
      },



});