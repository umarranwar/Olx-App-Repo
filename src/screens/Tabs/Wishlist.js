import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const Wishlist = () => {
  const items = useSelector(state => state.wishlist);
  const [itemList, setItemList] = useState(items.data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wishlist</Text>
      </View>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.postedItemList}>
              <Image style={styles.postedImage} source={{uri: item.image}} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.price}>{'SAR' + item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.heart}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/love.png')}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#a2f2e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  heart: {
    position: 'absolute',
    right: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
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
  postedImage: {
    width: 100,
    height: 100,
    margin: 20,
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
});
