import React, { useEffect } from 'react';
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
import {AuthContext} from './components/context';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

const App = () => {

 // const [isLoading , setIsLoading] = React.useState(null);
 // const [userToken , setuserToken] = React.useState(null);

 const initialLoginState = {
   isLoading : true,
   userName : null,
   userToken : null,
 };


const loginReducer = (prevState , action) => {
switch(action.type){
  case 'RETRIEVE_TOKEN':
    return{
      ...prevState,
      userToken : action.token,
      isLoading : false,
    };
    case 'LOGIN':
      return{
        ...prevState,
        userName : action.id,
        userToken: action.token,
        isLoading: false,     
      };
      case 'LOGOUT':
        return{  
          ...prevState,
          userName : null,
          userToken: null,
          isLoading: false,
        };
        case 'REGISTER':
          return{
            ...prevState,
            userName : action.id,
            userToken: action.token,
            isLoading: false,
          };
}
 };

 const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);



  const authContext = React.useMemo(() => ({
    signIn: async(userName,password) => {
    // setuserToken('asdf');
    //  setIsLoading(false);
      let userToken;
      userToken = null;

      if(userName == 'user' && password == 'pass') 
      {

        try {    
          userToken = 'asfd';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      
      }
      console.log('user token :' , userToken);
      dispatch ({type : 'LOGIN' , id: userName  , token : userToken});
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch ({type : 'LOGOUT'});
    },
    signUp:() => {
    // setuserToken('asd');
    //  setIsLoading(false);
    },

  }));

useEffect(() => {
  setTimeout(async() => {
   // userToken = "asd"
    
    let userToken;
    userToken ="asd";
    console.log('user token :' , userToken);
    try {

     userToken = await AsyncStorage.getItem('userToken');
    } catch (e) {
      console.log(e);
    }
    dispatch ({type : 'RETRIEVE_TOKEN' , token : userToken});

  },   1000); 
 }, []);

if(loginState.isLoading){
  return(
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );

}
  export default App;
