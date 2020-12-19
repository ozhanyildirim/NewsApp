import React  from 'react';
import {ListItem,Left,Thumbnail,Body,Text,Button,Right} from 'native-base';
import TimeAgo from './time';
import { View } from 'react-native-animatable';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class DataItem extends React.Component {
  
    constructor(props) {
        super(props);
        this.data = props.data;
  
}
handlePress =() =>{
  const{url,title} =this.data;
  this.props.onPress({url,title})
}

render(){
    return(
      
 <View style={{backgroundColor:'#333'}}> 
<ListItem style={{backgroundColor:'#333'}} thumbnail >
<Left>
<Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'}} />
</Left>
<Body>
<Text numberOfLines={2} style={{color:'#fff'}}>{this.data.title}</Text>
 <Text note numberOfLines={2} style={{marginTop:10 , color:'#ffffff'}}>{this.data.description}</Text>
<View style={{flex:1 , flexDirection:'row'}}>
<Text note style={{marginTop : 10}}>{this.data.source.name}</Text>
<TimeAgo time={this.data.publishedAt}/>
</View>
</Body>
<Right>
  <Button transparent onPress={this.handlePress}>
    <Text>View</Text>
  </Button>
</Right>
</ListItem>
    
</View>);
}} 


