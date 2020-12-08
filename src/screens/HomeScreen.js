import * as React from 'react';
import { Button, View, Text ,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text>Home Screen</Text>
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