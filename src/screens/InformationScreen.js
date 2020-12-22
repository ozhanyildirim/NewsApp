import React, { useCallback } from "react";
import { View, Text , Image , StyleSheet , Header , Button, Linking} from 'react-native';
import {useTheme} from '@react-navigation/native'
import { Appbar } from 'react-native-paper';

const mailURL = "mailto:ozhannuri@gmail.com";
const instaURL = "https://www.instagram.com/yildirimozhan";
const twitterURL = "https://twitter.com/osiriks";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
function InformationScreen({  }) {

  const {colors } =useTheme();
  const theme = useTheme();

 

    return (
      <View >
      <Appbar.Header style={styles.Header}>
   
      <Appbar.Content title="Hakkında" subtitle="OsiNews"  />
    
    </Appbar.Header>  

     
        
      <View style={styles.container}>
         <Image 
                source={require('/app/app/assets/osinews.png')}
                style={styles.logo}
                resizeMode="stretch"
      />
             
        <Text style={{color :colors.text }}> 
              
              ÖZHAN NURİ YILDIRIM
</Text>


      <Text style={{color :colors.text ,marginTop : 15 , marginBottom : 50 }}> 
              
              Öneri , görüş ve şikayetleriniz için : 
</Text>




<View style={{flexDirection : 'row', marginTop:15 , marginLeft : 0}}> 
<Image 
                source={require('/app/app/assets/email2.png')}
                style={styles.tinyLogo}
      />
<OpenURLButton url={mailURL} >Gmail


</OpenURLButton>
</View>

<View style={{flexDirection : 'row', marginTop:15 , marginLeft : 0 , marginLeft : 30}}> 
<Image 
                source={require('/app/app/assets/instagram.png')}
                style={styles.tinyLogo}
      />
   <OpenURLButton url={instaURL}>Instagram</OpenURLButton>
    </View>

    <View style={{flexDirection : 'row', marginTop:15 , marginLeft : 0 , paddingLeft : 0}}> 
  <Image 
source={{
  uri: 'https://www.iics.k12.tr/wp-content/uploads/2019/07/twitter-logo-png-twitter-logo.png',
}}              
  style={styles.tinyLogo}
    />
    <OpenURLButton url={twitterURL}>Twitter</OpenURLButton>

    </View>

    
  
       
       </View>
      </View>
    );
  }

export default InformationScreen;

const styles = StyleSheet.create({
  container:{
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header :{
    backgroundColor :'#334a8a',
    alignItems: 'center',
   
    
  },button :{
    marginTop :50
  }, 
  tinyLogo: {
    width: 50,
    height: 50,
  },
 

});
