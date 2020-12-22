import React, { Component ,useState, useEffect, useRef } from 'react';
import { View, Text , Image , StyleSheet , Header} from 'react-native';
import {useTheme} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Button, Platform } from 'react-native';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function NotificationsScreen({  }) {

  const {colors } =useTheme();
  const theme = useTheme();

      const [expoPushToken, setExpoPushToken] = useState('');
      const [notification, setNotification] = useState(false);
      const notificationListener = useRef();
      const responseListener = useRef();
    
      useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener);
          Notifications.removeNotificationSubscription(responseListener);
        };
      }, []);
    
      return (
        <View
         >
              <Appbar.Header style={styles.Header}>
   
   <Appbar.Content title="Bildirimler" subtitle="OsiNews"  />
 
 </Appbar.Header>  
         
         <View style={styles.container}>
         <Image 
                source={require('/app/app/assets/osinews.png')}
                style={styles.logo}
                resizeMode="stretch"
      />
      </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color :colors.text , fontSize : 20 , marginVertical : 15}}>BİLDİRİM BAŞLIĞI: {"OSI NEWS"} </Text>
            <Text style={{color :colors.text, fontSize : 20 , marginVertical : 15}}>BİLDİRİM GÖVDESİ: {"Haberler Güncellendi"}</Text>
            <Text style={{color :colors.text , fontSize : 20, marginVertical : 15}}>BİLDİRİM VERİSİ: {"İçeriğe Git"}</Text>
          </View>
          <Button
            title="BİLDİRİM GÖNDERMEK İÇİN TIKLA"
            onPress={async () => {
              await schedulePushNotification();
            }}
          />
        </View>
      );
    }
    
    async function schedulePushNotification() {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "OSI NEWS! 📰",
          body: 'Haberler Güncellendi',
          data: { data: 'içeriğe git' },
        },
        trigger: { seconds: 2 },
      });
    }
    
    async function registerForPushNotificationsAsync() {
      let token;
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Bildirim için token alınamadı!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Bildirim için Fiziksel bir cihaz gerekli');
      }
    
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      return token;
    }
export default NotificationsScreen;

const styles = StyleSheet.create({
  container:{
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header :{
    backgroundColor :'#17778a',
    alignItems: 'center',
   
  },
 

});

 /*
import React from 'react';
import { Text } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

export default class AuthScreen extends React.Component {
  state = { user: null };

  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: '66439311940-atmlrefgjnj06m8c5tf0dofmjqjtpmta.apps.googleusercontent.com',
    });
    this._syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  onPress = () => {
    if (this.state.user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };

  render() {
    return <Text onPress={this.onPress}>Toggle Auth</Text>;
  }
}*/