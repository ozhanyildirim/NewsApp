import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import getArticles from '../service/news';
import {Alert , View , Text, ActivityIndicator} from 'react-native';
import DataItem from '../../components/dataItem';
import Modal from '../../components/modal';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];


export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
    
    this.state = {
        isLoading: true,
        data: null,
        setModalVisible: false,
        modalArticleData : {},
    }
    
    }

    handleItemDataOnPress = (articleData) => {
        this.setState({
          setModalVisible :true,
          modalArticleData : articleData
        });
    }

    handleModalClose = () => {
      this.setState({
        setModalVisible :false,
        modalArticleData : {},
      });
    }

    componentDidMount() {
        getArticles('entertainment').then(data => {
          this.setState({
            isLoading: false,
            data: data
          });
        }, error => {
          Alert.alert('Error', 'Something went wrong!');
        }
        )
      }
  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
        <View> 
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop : 10 }}>Yükleniyor Lütfen Bekleyin</Text>
        </View>
    ) : (
        <List 
        dataArray = {this.state.data}
        renderRow={(item) => {
            return (
            <DataItem onPress={this.handleItemDataOnPress} data={item} />
            )
        }
      }
        
        />
    )


    return (
      <Container>
        <Content>
        
         {view}
        
        </Content>
        <Modal 
        showModal={this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalClose}
        
        />
      </Container>
    );
  }
}