import React, { Component } from 'react';
import { View, Text , Button ,StyleSheet} from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                SETTİNGS SCREEN
            </Text>
            <Button
            title ='Click Here'
            onPress={() => alert('button clicked')}>

            </Button>


        </View>
    );
};
export default SettingsScreen;
const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
    }
})