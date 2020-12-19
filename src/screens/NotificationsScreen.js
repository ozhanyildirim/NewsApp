import React, { Component } from 'react';
import { View, Text , Image , StyleSheet , Header} from 'react-native';
import {useTheme} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';


function NotificationsScreen({  }) {

  const {colors } =useTheme();
  const theme = useTheme();

    return (
      <View >
      <Appbar.Header style={styles.Header}>
   
      <Appbar.Content title="Bildirimler"  />
    
    </Appbar.Header>  

     
        
      <View style={styles.container}>
         <Image 
                source={require('/app/app/assets/osinews.png')}
                style={styles.logo}
                resizeMode="stretch"
      />
        <Text style={{color :colors.text}}> aLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat ipsum a urna vehicula interdum. Quisque rhoncus, enim eu pretium lobortis, tortor dolor interdum leo, sit amet tempus justo justo ut purus. Suspendisse sed nisi nec sapien condimentum varius non sit amet metus. Donec sit amet mauris tristique, congue quam vitae, bibendum nisl. Proin nisi tortor, ultrices vitae mattis at, venenatis dignissim augue. Donec cursus blandit eros, et tempus ex viverra id. Curabitur quis dapibus leo. Nulla auctor accumsan lobortis. Morbi viverra dui quis dui faucibus, in consequat lectus blandit. Phasellus aliquam eros a erat elementum sollicitudin. Phasellus interdum purus quam, id lobortis erat pulvinar vel. Sed at ipsum a lacus lacinia varius eget hendrerit lectus. Vestibulum sagittis ligula vel nibh porttitor cursus.
</Text>
        <Image 
                source={require('/app/app/assets/osinews.png')}
                style={styles.logo}
                resizeMode="stretch"
      />
       </View>
      </View>
    );
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
