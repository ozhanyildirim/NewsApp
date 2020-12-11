import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {DrawerContent} from './src/screens/DrawerContent';
import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import RootStackScreen from './src/screens/RootStackScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();



function App() {
 // <DetailsScreen/>   
  
  return (
    
    <NavigationContainer>
     <RootStackScreen/>
     {/* <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
  </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
