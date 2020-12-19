import * as React from 'react';
import { Button, View, Text ,StyleSheet , StatusBar , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native'

function HomeScreen({ navigation }) {

  const {colors } =useTheme();
  const theme = useTheme();

  return (
    <View style={ styles.container }>
      <StatusBar barStyle={theme.dark ?"light-content" : "dark-content"}/>
     
      <Image 
                source={require('/app/app/assets/osinews.png')}
                style={styles.logo}
                resizeMode="stretch"
      />
        <Text style ={{color:colors.text , marginTop :5 , fontSize : 35 , fontWeight : 'bold'}}>HABERİN TEK ADRESİ  </Text>

     <Text style ={{color:colors.text , paddingTop :50}}>Tüm haberlere erişmek için sol üstteki menüyü kullanın  </Text>
     <Text style ={{color:colors.text , marginTop :5 }}>veya ekranınızı soldan sağa doğru çekin.</Text>
     <Text style ={{color:colors.text , marginTop :15}}>Bildirimleri açmayı unutmayın...  </Text>
  
    </View>
  ); 
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
     justifyContent: 'center'
  }

});