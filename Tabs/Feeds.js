import React from 'react';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';

export default function Feeds ({navigation}) {
    return (
        <View style={styles.container}>
            <MyList/>
        </View>
    )
}

class MyList extends React.Component {
    constructor(){
      super();
      this.state = {
        data: [],
        page:1,
        isLoading: false,
      }
    }
  
    componentDidMount(){
      this.setState({isLoading: true}, this.getData);
    }
  
    getData = async () => {
      const URL = 'https://picsum.photos/v2/list?page=&limit=20' + this.state.page;
      fetch(URL).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          isLoading:true
        })
      }).finally(() => this.setState({isLoading: false}))
    }
  
    renderRow = ({item}) => {
      return(
        <View style = {styles.itemContainer}>
          <Image source={{uri:item.download_url}} style = {styles.itemImage}/>
          <View style={styles.itemTextContainer}>
            <Text style = {styles.itemText}>{item.author}</Text>
          </View>
        </View>
      )
    }
  
    handleLoadMore = () => {
      this.setState(
        {page: this.state.page +1, isLoading: true},
        this.getData
      )
    }
  
    handleRefresh = () => {
      this.setState({
        page:1,
        isLoading: true,
      }, this.getData)
    }
  
    render() {
      return(
        <FlatList
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index)=>index.toString()}
        onEndReached={this.handleLoadMore}
        refreshing={this.state.isLoading}
        onRefresh={this.getData}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a474e',
        paddingTop: 5,
    },
    itemImage: {
        width: 320,
        height: 200,
        borderRadius: 15,
    },
    itemTextContainer: {
        backgroundColor: 'black',
        opacity: 0.65,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        position: 'relative',
        bottom: 29
    },
    itemText: {
        color: 'white',
        fontSize: 14,
        padding: 5,
        alignSelf: 'center',
    },
  })