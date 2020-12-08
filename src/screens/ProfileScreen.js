import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> FONT </Text>
        <Text style={styles.font}>DENEME</Text>
        <Text style={styles.font}> 123 </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center',
       justifyContent: 'center'
    },
    font : {
        marginTop : 5,
        fontSize : 50,
        color: 'purple',
        backgroundColor : 'pink',
        borderWidth : 3,
        borderRadius : 4,
        borderColor : 'aquamarine',


    }
  
  });