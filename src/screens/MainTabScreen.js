import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SportScreen from './SportScreen';
import MagazineScreen from './MagazineScreen';
import ScienceScreen from './ScienceScreen';
import EconomyScreen from './EconomyScreen';

const HomeStack = createStackNavigator();
const SportStack = createStackNavigator();
const MagazineStack = createStackNavigator();
const EconomyStack = createStackNavigator();
const ScienceStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Ana Sayfa',
        tabBarColor : '#8706a1',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={SportStackScreen}
      options={{
        tabBarLabel: 'Spor',
        tabBarColor : '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-american-football" color={color} size={26} />
         
        ),
      }}
    />
     
     <Tab.Screen
      name="Magazine"
      component={MagazineStackScreen}
      options={{
        tabBarLabel: 'Magazin',
        tabBarColor : '#018c32',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Science"
      component={ScienceStackScreen}
      options={{
        tabBarLabel: 'Bilim',
        tabBarColor : '#ff8229',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-book" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Economy"
      component={EconomyStackScreen}
      options={{
        tabBarLabel: 'Ekonomi',
        tabBarColor : '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-cash" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (

    <HomeStack.Navigator screenOptions={{
      headerStyle : { 
         backgroundColor : '#8706a1'
       },
       headerTintColor : '#8706a1',
       headerTitleStyle:{
         fontWeight:'bold',
         color:'white'
       }
     
   }}  >
     <HomeStack.Screen name="Home" component={HomeScreen} 
     options={{
      title:'Ana Sayfa',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={24}
         backgroundColor="#8706a1"
         onPress= {() => navigation.openDrawer()}> 
         </Icon.Button>
         )}}
         />
    
   </HomeStack.Navigator>
  );


  const SportStackScreen = ({navigation}) => (
  
    <SportStack.Navigator screenOptions={{
      headerStyle : { 
         backgroundColor : '#694fad'
       },
       headerTintColor : '#694fad',
       headerTitleStyle:{
         fontWeight:'bold',
         color:'white'
       }
     
   }}  >
     <SportStack.Screen name="Sport" component={SportScreen} options={{
             title:'Spor Haberleri',

       headerLeft: () => (
        <Icon.Button name="ios-menu" size={24}
         backgroundColor="#694fad"
         onPress= {() => navigation.openDrawer()}> 
         </Icon.Button>
         )
     }}/>
    
   </SportStack.Navigator>
  );

const MagazineStackScreen = ({navigation}) => (

  <MagazineStack.Navigator screenOptions={{
    headerStyle : { 
       backgroundColor : '#018c32'
     },
     headerTintColor : '#018c32',
     headerTitleStyle:{
       fontWeight:'bold',
       color:'white'
     }
   
 }}  >
   <MagazineStack.Screen name="Magazine" component={MagazineScreen} 
   options={{
    title:'Magazin Haberleri',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={24}
       backgroundColor="#018c32"
       onPress= {() => navigation.openDrawer()}> 
       </Icon.Button>
       )}}
       />
  
 </MagazineStack.Navigator>
);
const ScienceStackScreen = ({navigation}) => (

  <ScienceStack.Navigator screenOptions={{
    headerStyle : { 
       backgroundColor : '#ff8229'
     },
     headerTintColor : '#ff8229',
     headerTitleStyle:{
       fontWeight:'bold',
       color:'white'
     }
   
 }}  >
   <ScienceStack.Screen name="Science" component={ScienceScreen} 
   options={{
    title:'Bilim ve Teknoloji Haberleri',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={24}
       backgroundColor="#ff8229"
       onPress= {() => navigation.openDrawer()}> 
       </Icon.Button>
       )}}
       />
  
 </ScienceStack.Navigator>
);
const EconomyStackScreen = ({navigation}) => (

  <EconomyStack.Navigator screenOptions={{
    headerStyle : { 
       backgroundColor : '#d02860'
     },
     headerTintColor : '#d02860',
     headerTitleStyle:{
       fontWeight:'bold',
       color:'white'
     }
   
 }}  >
   <EconomyStack.Screen name="Spor" component={EconomyScreen} 
   options={{
    title:'Ekonomi Haberleri',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={24}
       backgroundColor="#d02860"
       onPress= {() => navigation.openDrawer()}> 
       </Icon.Button>
       )}}
       />
  
 </EconomyStack.Navigator>
);
 