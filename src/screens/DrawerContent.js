import React, { Component } from 'react';
import { View ,StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    useTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';
import {AuthContext} from '../../components/context';
import NotificationsScreen from '../screens/NotificationsScreen';
export function DrawerContent(props) {

    const paperTheme = useTheme();

    const {signOut , toggleTheme}= React.useContext(AuthContext);
    return(

<View style= {{flex : 1 }}>
<DrawerContentScrollView {... props}>
    <View style={styles.drawerContent}>
        <View style={{flexDirection : 'row', marginTop:15 , marginLeft : 6}}> 
       <Avatar.Image 
              source={require('/app/app/assets/pp.png')}
            size={50}
            
            />
            
            <View style={{marginLeft :15, flexDirection:'column'}}>
            <Title>Kullanıcı </Title>
                <Caption style={styles.caption}>@kullanici
                </Caption>
                </View>
                </View>
<View style={styles.row}>
    <View style={styles.section}> 
    <View style={{marginLeft : 10}}> 
    <Paragraph style={[styles.paragraph,styles.caption]}>0</Paragraph>
    </View>
    <Caption style={styles.caption}>Following</Caption>
    </View>
   
    <View style={styles.section}> 
    <Paragraph style={[styles.paragraph,styles.caption]}>0</Paragraph>
    <Caption style={styles.caption}>Followers</Caption>
    </View>
    
</View>
<Drawer.Section style={styles.drawerSection}>
<DrawerItem 
    icon={({color,size}) => (
        <Icon
        name = "home-outline"
        color={color}
        size={size}
        />
    )}
    label ="Ana Sayfa"
    onPress={() => {props.navigation.navigate('Home')}}
    
    />
    <DrawerItem 
    icon={({color,size}) => (
        <Icon
        name = "newspaper"
        color={color}
        size={size}
        />
    )}
    label ="Tüm Haberler"
    onPress={() => {props.navigation.navigate('AllnewsScreen')}}
    
    
    />
     <DrawerItem 
    icon={({color,size}) => (
        <Icon
        name = "bell-ring-outline"
        color={color}
        size={size}
        />
    )}
    label ="Bildirimler"
    onPress={() => {props.navigation.navigate('NotificationsScreen')}}
    
    
    />
    <DrawerItem 
    icon={({color,size}) => (
        <Icon
        name = "information-outline"
        color={color}
        size={size}
        />
    )}
    label ="Hakkında"
    onPress={() => {props.navigation.navigate('InformationScreen')}}
    
    />
  
   
</Drawer.Section>

<Drawer.Section title="Tercihler">
    <TouchableRipple onPress={()=> {toggleTheme()}}>
        <View style={styles.preference}>
            <Text>
                Dark Theme
            </Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark}/>
            </View>
         
        </View>
    </TouchableRipple>

</Drawer.Section>
<Text style={{marginLeft : 5 , paddingTop : 10}}>
      ÖZHAN NURİ YILDIRIM
     </Text>
     <Text style={{marginLeft : 5 , paddingTop : 5}}>
      © 2020
     </Text>
    </View>
</DrawerContentScrollView>
<Drawer.Section style={StyleSheet.bottomDrawerSection}>
    <DrawerItem 
    icon={({color,size}) => (
        <Icon
        name = "exit-to-app"
        color={color}
        size={size}
        />
    )}
    label ="Sign Out"
    onPress={() => {signOut()}}
   
    
    
    />
</Drawer.Section>
        </View>

    );
}

const styles = StyleSheet.create({
    drawerContent : {
        flex : 1,

    },
    userInfoSection: {
        paddingLeft : 20,
    },
    title : {
        fontSize : 16,
        marginTop : 3,
        fontWeight : 'bold',
    },
    caption : {
        fontSize : 14,
        lineHeight : 15,
    },
    row : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',

    },
    section : {
        flexDirection : 'row',
        alignItems : 'center',
        marginRight : 15,
    },
paragraph : {
    fontWeight : 'bold',
    marginRight : 3,
},
drawerSection : {
    marginTop :15,
},
bottomDrawerSection : {
    marginBottom : 15,
    borderTopColor : '#f4f4f4',
    borderTopWidth : 1
},
preference : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingVertical : 12,
    paddingHorizontal :16,
},
});
