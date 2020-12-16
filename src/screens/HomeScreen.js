import * as React from 'react';
import { Button, View, Text ,StyleSheet , StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native'

function HomeScreen({ navigation }) {

  const {colors } =useTheme();
  const theme = useTheme();

  return (
    <View style={ styles.container }>
      <StatusBar barStyle={theme.dark ?"light-content" : "dark-content"}/>
      <Text style ={{color:colors.text}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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