import React, { Component } from 'react';
import { View, Text , Button ,StyleSheet} from 'react-native';

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                SUPPORT SCREEN
            </Text>
            <Button
            title ='Click Here'
            onPress={() => alert('button clicked')}>

            </Button>


        </View>
    );
};
export default SupportScreen;
const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
    }
})