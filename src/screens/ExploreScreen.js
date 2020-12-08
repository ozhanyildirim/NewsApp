import React, { Component } from 'react';
import { View, Text , Button ,StyleSheet} from 'react-native';

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                ExploreScreen
            </Text>
            <Button
            title ='Click Here'
            onPress={() => alert('button clicked')}>

            </Button>


        </View>
    );
};
export default ExploreScreen;
const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        justifyContent : 'center',
        alignItems : 'center',
    }
})