import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
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
        tabBarLabel: 'Home',
        tabBarColor : '#8706a1',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor : '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
     
     <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor : '#018c32',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor : '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
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
      title:'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={24}
         backgroundColor="#8706a1"
         onPress= {() => navigation.openDrawer()}> 
         </Icon.Button>
         )}}
         />
    
   </HomeStack.Navigator>
  );
  const DetailsStackScreen = ({navigation}) => (
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle : { 
         backgroundColor : '#694fad'
       },
       headerTintColor : '#694fad',
       headerTitleStyle:{
         fontWeight:'bold',
         color:'white'
       }
     
   }}  >
     <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-menu" size={24}
         backgroundColor="#694fad"
         onPress= {() => navigation.openDrawer()}> 
         </Icon.Button>
         )
     }}/>
    
   </DetailsStack.Navigator>
  );

const ExploreStackScreen = ({navigation}) => (

  <ExploreStack.Navigator screenOptions={{
    headerStyle : { 
       backgroundColor : '#8706a1'
     },
     headerTintColor : '#8706a1',
     headerTitleStyle:{
       fontWeight:'bold',
       color:'white'
     }
   
 }}  >
   <ExploreStack.Screen name="Explore" component={ExploreScreen} 
   options={{
    title:'Home',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={24}
       backgroundColor="#8706a1"
       onPress= {() => navigation.openDrawer()}> 
       </Icon.Button>
       )}}
       />
  
 </ExploreStack.Navigator>
);
 