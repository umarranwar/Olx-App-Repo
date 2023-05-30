import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { addToWishlist } from '../../redux/WishlistSlice';
const Home = () => {
  const items = useSelector(state => state.post);
  const dispatch = useDispatch()
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.logo}>OLX Buy & Sale</Text>
      </View>
      <View style={styles.SearchBox}>
        <TextInput style={styles.input} placeholder="Search items...here" />
        <Image
          style={{width: 30, height: 30}}
          source={require('../../assets/search.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          color: 'black',
          marginVertical: 20,
          marginLeft: 40,
        }}>
        What are you looking for?
      </Text>
      <View>
        <FlatList
          numColumns={3}
          data={[
            {title: 'Car', icon: require('../../assets/sedan.png')},
            {title: 'Bike', icon: require('../../assets/bike.png')},
            {title: 'Laptop', icon: require('../../assets/laptop.png')},
            {title: 'Mobile', icon: require('../../assets/mobile.png')},
            {title: 'Furniture', icon: require('../../assets/sofa.png')},
            {title: 'House', icon: require('../../assets/house.png')},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ItemsByCategory', {category: item.title})
                }
                style={styles.listItem}>
                <Image source={item.icon} style={styles.ListIcon} />
                <Text style={styles.listItemTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          color: 'black',
          marginVertical: 20,
          marginLeft: 40,
        }}>
        Posted Item
      </Text>
      <FlatList
        data={items.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.postedItemList}>
              <Image style={styles.postedImage} source={{uri: item.image}} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.price}>{'SAR' + item.price}</Text>
              </View>
              <TouchableOpacity onPress={()=>{dispatch(addToWishlist(item))}} style={styles.heart}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/love.png')}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 40,
    color: 'black',
    marginTop: 20,
    marginLeft: 30,
    fontWeight: '700',
    alignSelf:'center'
  },
  SearchBox: {
    width: '80%',
    height: 60,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginLeft: 10,
    fontSize: 20,
  },
  ListIcon: {
    width: 80,
    height: 80,
  },
  listItem: {
    backgroundColor: 'lightgrey',
    margin: 2,
    width: Dimensions.get('window').width / 3,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  postedImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  postedItemList: {
    marginTop: 5,
    width: '90%',
    height: 150,
    backgroundColor: 'lightgrey',
    margin: 2,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  desc: {
    fontSize: 20,
  },
  price: {
    fontSize: 22,
    color: 'green',
  },
  heart: {
    position:'absolute',
    right:20,
  },
});
