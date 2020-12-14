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
import {AuthContext} from './components/context';

import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import { ActivityIndicator } from 'react-native-paper';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();

<RootStackScreen/>
const App= () => {

  const [isLoading , setIsLoading] = React.useState(null);
  const [userToken , setuserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setuserToken('asdf');
      setIsLoading(false);
    },
    signOut:() => {
      setuserToken(null);
      setIsLoading(false);
    },
    signUp:() => {
      setuserToken('asdf');
      setIsLoading(false);
    },

  }));

React.useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);

  },   1000); 
 }, []);

if(isLoading){
  return(
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  );
}
  return (
    <AuthContext.Provider value = {authContext}> 
    <NavigationContainer>
      {userToken === null ? (
 <RootStackScreen/>
   
  ) 
: 
<Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
     
<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
<Drawer.Screen name="SupportScreen" component={SupportScreen} />
<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />


</Drawer.Navigator>  
 
}
    </NavigationContainer>
    </AuthContext.Provider>
  );

}
  export default App;
