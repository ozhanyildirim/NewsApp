import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainTabScreen from './src/screens/MainTabScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();



function App() {
 // <DetailsScreen/>   
  
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
       {/*} <Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
