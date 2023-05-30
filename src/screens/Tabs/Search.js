import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';
const Search = () => {
  const items = useSelector(state => state.post);
  const [itemList, setItemList] = useState(items.data);
  const [text, setText] = useState('');
  const filterList = txt => {
    let tempList = items.data;
    let temp = tempList.filter(item => {
      return item.name.toLowerCase().match(txt.toLowerCase());
    });
    setItemList(temp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.SearchBox}>
        <TextInput
          onChangeText={txt => {
            setText(txt);
            filterList(txt);
          }}
          style={styles.input}
          placeholder="Search items...here"
        />
        <Image
          style={{width: 30, height: 30}}
          source={require('../../assets/search.png')}
        />
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
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
