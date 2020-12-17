import React  from 'react';
import {ListItem,Left,Thumbnail,Body,Text,Button,Right} from 'native-base';


export default class DataItem extends React.Component {
   
    constructor(props) {
        super(props);
        this.data = props.data;
  
}

render(){
    return(
<ListItem thumbnail>
<Left>
<Thumbnail square source={{ uri: this.data.urlToImage}} />
</Left>
<Body>
<Text numberOfLines={2}>{this.data.title}</Text>
 <Text note numberOfLines={2}>{this.data.description}</Text>
</Body>
<Right>
  <Button transparent>
    <Text>View</Text>
  </Button>
</Right>
</ListItem>
    );
}}