import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const ItemsByCategory = () => {
  const items = useSelector(state => state.post);
  const route = useRoute();
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    let tempData = items.data;
    let tem = [];
    tempData.map(item => {
      if (item.category == route.params.category) {
        tem.push(item);
      }
    });
    setItemList(tem);
  }, []);
  return (
    <View style={styles.container}>
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
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ItemsByCategory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
